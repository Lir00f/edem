import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
    },
    host: '0.0.0.0', // Доступ извне
    port: 5173, // Порт
  },
});