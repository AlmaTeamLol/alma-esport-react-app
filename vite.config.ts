//import react from '@vitejs/plugin-react-swc'
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  define: {
    'process.env': {},
  },
})
