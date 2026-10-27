import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  esbuild: { jsx: 'automatic' },
  server: { allowedHosts: true },
  build: { outDir: 'dist', sourcemap: false },
});
