// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/general.css'
    ],
    ssr: true,
    runtimeConfig: {
        public:{
            serverURL: "http://localhost:3001" // URL of your local server
        }
    },
    app: {
        // Checking environment variable to decide whether the link 
        baseURL: '/genesiscapital/', // Name of your GitHub Repository
        buildAssetsDir: 'staticFiles'
    },
    generate: {
        routes: [
            '/areas/1',
            '/areas/2',
            '/areas/3',
            '/areas/4',
            '/projects/1',
            '/projects/2',
            '/projects/3',
            '/projects/4',
            '/projects/5',
            '/projects/6',
            '/projects/7',
            '/projects/8',
            '/projects/9',
            '/projects/10',
            '/projects/11',
            '/projects/12',
            '/projects/13',
            '/projects/14',
            '/projects/15',
            '/employees/1',
            '/employees/2',
            '/employees/3',
            '/employees/4',
            '/employees/5',
            '/employees/6',
            '/employees/7',
            '/employees/8',
            '/employees/9',
            '/employees/10',
        ]
    },
})
