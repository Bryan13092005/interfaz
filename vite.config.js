import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'github' ? '/interfaz/' : '/',
  plugins: [react()],
  build: {
    outDir: mode === 'github' ? 'docs' : 'dist'
  }
}))
