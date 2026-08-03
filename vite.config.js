import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    entry: 'src/main.jsx',
    // '/about' -> '/about/index.html', matching Vercel's default static routing.
    dirStyle: 'nested',
  },
})
