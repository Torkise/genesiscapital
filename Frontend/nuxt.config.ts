import { buildAssetsDir } from "nuxt/dist/core/runtime/nitro/paths";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/general.css'
    ],
    ssr: true,
    runtimeConfig: {
        dev: 0,
        public:{
            serverURL: "http://localhost:3001" // URL of your local server
        }
    },
    app: {
        // Checking environment variable to decide whether the link 
        baseURL: '/genesiscapital/', // Name of your GitHub Repository
        buildAssetsDir: 'buildAssetsDir'
    },
    experimental: {
        payloadExtraction: false
      }
})
