//import react from '@vitejs/plugin-react-swc'
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite'

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants.ts"),
      "@data": path.resolve(__dirname, "src/data"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@types": path.resolve(__dirname, "src/types"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@schemas": path.resolve(__dirname, "src/schemas"),
    },
  },
  plugins: [reactRouter()],
  define: {
    'process.env': {},
  },
})
