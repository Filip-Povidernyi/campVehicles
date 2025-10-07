import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// якщо твій репозиторій на GitHub має таку назву, зміни нижче:
export default defineConfig({
  plugins: [react()],
  base: '/campVehicles/',
})
