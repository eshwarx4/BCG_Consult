import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define @ to point to src directory
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude lucide-react from dependency pre-bundling
  },
});
