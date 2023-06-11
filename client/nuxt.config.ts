import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({

    runtimeConfig:{
      api_base:process.env.API_BASE
    },
    build:{
        transpile: ['vuetify']
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    css:['~/assets/App.scss','vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css'],
    app:{
        rootId:'v-app',
        rootTag:'main',
        head:{
            title:'my website',
            meta: [
                { name: 'viewport', content: 'width=device-width ,initial-scale=1.0' },
                { name: 'description', content: 'welcome to My project' },
                { name: 'keyword', content: 'HTML,CSS,Js developer' },
                { "http-equiv": 'X-UA-Compatible', content: 'ie=edge' },
            ],
            bodyAttrs:{}
        }
    },
    srcDir: './src',
    modules: [
        '@pinia/nuxt','@nuxt/image-edge'
    ],
    hooks: {
        'vite:extendConfig': (config:any) => {
            config.plugins.push(
                vuetify({
                    styles: { configFile: resolve('./settings.scss') },
                })
            )
     }}
})
