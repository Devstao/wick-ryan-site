CREATE TABLE public.instagram_feed_cache (
  id TEXT PRIMARY KEY,
  posts JSONB NOT NULL DEFAULT '[]'::jsonb,
  fetched_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT ON public.instagram_feed_cache TO anon;
GRANT SELECT ON public.instagram_feed_cache TO authenticated;
GRANT ALL ON public.instagram_feed_cache TO service_role;
ALTER TABLE public.instagram_feed_cache ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read instagram cache" ON public.instagram_feed_cache FOR SELECT USING (true);