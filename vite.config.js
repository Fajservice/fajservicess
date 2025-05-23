import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
   server: {
    host: '192.168.0.60',
    port: 5173, // or any port you're using
  },
  plugins: [react()],
  //  base: '/dist/',
})