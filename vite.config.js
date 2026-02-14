import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Tailwind from './Tailwind'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Tailwind()
  ],
})
