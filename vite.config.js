import {defineConfig, mergeAlias} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from "path";


export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/css/Home/app.css',
            'resources/js/Home/app.js',
            'resources/js/admin/main.js',
        ]),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
});
