import { resolve } from 'path';

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'public'), // Output to the public folder
    emptyOutDir: true, // Clean the output folder before each build
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'), // Ensure the correct entry point
    },
  },
  server: {
    port: 8080, // Optional: Development server port
  },
};
