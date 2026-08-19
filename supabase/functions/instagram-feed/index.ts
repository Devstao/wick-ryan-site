import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

const USERNAME = 'wickryanam';
const CACHE_ID = USERNAME;
const SIX_HOURS_MS = 6 * 60 * 60 * 1000;
const MAX_POSTS = 12;

type Post = {
  shortcode: string;
  type: 'reel' | 'post';
  title: string;
  thumbnail: string | null;
  timestamp: number;
};

function buildTitle(caption: string): string {
  const clean = caption
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))[0] ?? 'Nova publicação';
  return clean.length > 90 ? `${clean.slice(0, 87)}...` : clean;
}

async function fetchInstagram(): Promise<Post[]> {
  const res = await fetch(
    `https://www.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36',
        'x-ig-app-id': '936619743392459',
        'Accept': '*/*',
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Instagram respondeu ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }

  const json = await res.json();
  const edges = json?.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

  return (edges as any[])
    .map((e) => e.node)
    .map((n) => ({
      shortcode: n.shortcode as string,
      type: (n.__typename === 'GraphVideo' ? 'reel' : 'post') as 'reel' | 'post',
      title: buildTitle(n?.edge_media_to_caption?.edges?.[0]?.node?.text ?? ''),
      thumbnail: (n.display_url ?? null) as string | null,
      timestamp: (n.taken_at_timestamp ?? 0) as number,
    }))
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, MAX_POSTS);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  );

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  try {
    const url = new URL(req.url);
    const force = url.searchParams.get('force') === '1';

    const { data: cached } = await supabase
      .from('instagram_feed_cache')
      .select('posts, fetched_at')
      .eq('id', CACHE_ID)
      .maybeSingle();

    const fresh =
      cached && Date.now() - new Date(cached.fetched_at).getTime() < SIX_HOURS_MS;

    if (cached && fresh && !force) {
      return json({ posts: cached.posts, fetched_at: cached.fetched_at, source: 'cache' });
    }

    try {
      const posts = await fetchInstagram();
      if (posts.length === 0) throw new Error('Nenhum post retornado');

      const fetched_at = new Date().toISOString();
      await supabase
        .from('instagram_feed_cache')
        .upsert({ id: CACHE_ID, posts, fetched_at });

      return json({ posts, fetched_at, source: 'instagram' });
    } catch (fetchError) {
      console.error('Falha ao buscar Instagram:', fetchError);
      if (cached) {
        return json({
          posts: cached.posts,
          fetched_at: cached.fetched_at,
          source: 'stale-cache',
        });
      }
      return json({ error: String(fetchError), posts: [] }, 502);
    }
  } catch (error) {
    console.error('instagram-feed error:', error);
    return json({ error: String(error), posts: [] }, 500);
  }
});
