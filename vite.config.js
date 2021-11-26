// View your website at your own local server
// for example http://vite-php-setup.test

// http://localhost:3000 is serving Vite on development
// but accessing it directly will be empty

// IMPORTANT image urls in CSS works fine
// BUT you need to create a symlink on dev server to map this folder during dev:
// ln -s {path_to_vite}/src/assets {path_to_public_html}/assets
// on production everything will work just fine

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import liveReload from 'vite-plugin-live-reload'
import path from 'path'

const Dotenv = require('dotenv');

Dotenv.config();
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    // config
    root: path.resolve(__dirname, 'client'),
    publicDir: path.resolve(__dirname, 'client', 'static'),
    base: command === "build" ? "/dist/" : "",
    plugins: [
        vue(),
        liveReload("(app|config|database|public|resources|routes|tests)/**/*.php")
        // edit according to your source code
    ],

    build: {
        // output dir for production build
        outDir: path.resolve(__dirname, 'public/dist'),
        emptyOutDir: true,

        // emit manifest so PHP can find the hashed files
        manifest: true,

        // esbuild target
        target: 'es2018',

        // our entry
        rollupOptions: {
            input: path.resolve(__dirname, 'client/main.js')
        },
    },

    server: {
        // required to load scripts from custom host
        // we need a strict port to match on PHP side
        // change freely, but update on PHP to match the same port
        strictPort: true,
        port: 3000,
        manifest: true,

        // esbuild target
        target: 'es2018',
        fs: {
            // Allow serving files from one level up to the project root
            allow: [path.resolve(__dirname), path.resolve(__dirname, 'client')]
        },
    },
    // required for in-browser template compilation
    // https://v3.vuejs.org/guide/installation.html#with-a-bundler
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'client'),
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    optimizeDeps: {
        include: [
            'vue',
            'axios',
            'hoya'
        ]
    },
}));
