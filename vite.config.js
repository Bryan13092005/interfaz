import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // si tu repo se llama "interfaz", pon /interfaz/
  // para publicar en https://<usuario>.github.io/interfaz/
  base: '/interfaz/',
  plugins: [react()],
  build: {
    // hace que el resultado vaya a la carpeta docs para GitHub Pages (opcional)
    outDir: 'docs'
  }
})