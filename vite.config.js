import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración para GitHub Pages con React Router
export default defineConfig({
  plugins: [react()],
  base: '/', 
});
