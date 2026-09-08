import { defineConfig } from 'astro/config'
import { SITE } from './src/site.config.mjs'

export default defineConfig({
  site: SITE.baseUrl,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  devToolbar: { enabled: false },
})
