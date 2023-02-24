import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.studioalex.dev',
  integrations: [sitemap(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), partytown()],
  output: "server",
  adapter: netlify()
});