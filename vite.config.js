import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

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
  optimizeDeps: {
    exclude: ['sanity'],
  },
});
