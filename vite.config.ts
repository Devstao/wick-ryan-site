// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Multi-target build:
// - Lovable sandbox / preview: nitro auto-detects Lovable context (Cloudflare module preset).
// - Vercel: VERCEL=1 is set in the build environment → use the Vercel nitro preset.
// - Local `vite build` outside Lovable: nitro stays off → plain Vite SSR bundle.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: isVercel ? { preset: "vercel" } : undefined,
});
