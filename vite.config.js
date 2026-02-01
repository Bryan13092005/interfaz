import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/interfaz/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})