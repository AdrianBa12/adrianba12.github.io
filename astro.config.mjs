import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://adrianba12.github.io',
    
    base: '/',
    vite: {
        plugins: [tailwindcss()],
    },
    
    output: 'static',
});