import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightImageZoom from 'starlight-image-zoom'

export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: 'My Docs',
    }),
  ],
})