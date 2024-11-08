/// <reference types="vitest" />

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react({
      tsDecorators: true
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  base: "/todo-or-not-todo-v2.1/",
  server: {
    host: 'localhost',
    port: 3000
  },
})
