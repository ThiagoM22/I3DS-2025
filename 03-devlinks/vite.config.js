import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Abre automáticamente o navegador e inicia o server
    port: 3000, // A porta para conexão altere quando necessario
    host: true, // Se você quer que o servidor seja acessível externamente

  }
})
