import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default defineConfig({
  base: '/portfolio/',
  build: {
    emptyOutDir: true,
    assetsDir: '',
    sourcemap: false,
    cssMinify: true,
  },

  envDir: 'portfolio',

  plugins: [react(), ViteImageOptimizer()],
});
