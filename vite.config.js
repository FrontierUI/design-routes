import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import tailwindcss from 'tailwindcss';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  // css: { postcss: { plugins: [tailwindcss()] } },
  server: { host: '0.0.0.0', port: '5173' },
});
