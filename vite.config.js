import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      global: resolve(__dirname, 'node_modules/global/'),
    },
  },
  define: {
    'global': {},
  },
});
