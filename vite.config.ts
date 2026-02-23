import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '.localtunnel.me', // Permite todos os subdomínios do localtunnel
      '.ngrok-free.app',  // Exemplo para ngrok
      'sua-url-especifica.com' // Ou coloque a URL exata do seu túnel aqui
    ]
  }
})