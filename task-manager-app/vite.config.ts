import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Directory where the build files will be outputted
    outDir: 'dist',

    // Disable source maps for production to reduce build size
    sourcemap: false,

    // Minify the build files using esbuild (alternatively, you can use 'terser' for more advanced minification)
    minify: 'esbuild',
  },
});
