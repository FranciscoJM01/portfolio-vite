import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import getpageContext from './src/data/index.js';

export default defineConfig({
 
  base: process.env.DEPLOY_BASE_URL || '/',
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context(pagePath) {
        return getpageContext(pagePath);
      }
    }),
  ],
});