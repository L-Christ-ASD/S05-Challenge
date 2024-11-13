import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // expose Vite à l'extérieur
    watch: {
      usePolling: true, // Hot reloading pour Windows
    },
  },
})
