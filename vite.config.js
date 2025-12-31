import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    plugins: [
      react({
        babel: {
          plugins: isProd
            ? ['babel-plugin-transform-react-remove-prop-types']
            : []
        }
      }),

      isProd &&
        visualizer({
          filename: 'dist/stats.html',
          gzipSize: true,
          brotliSize: true
        })
    ].filter(Boolean),

    build: {
      target: 'es2022',
      minify: 'esbuild',
      sourcemap: false,
      cssCodeSplit: true,
      reportCompressedSize: false,

      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react-router')) return 'router';
              if (id.includes('react')) return 'react';
              return 'vendor';
            }
          },

          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(css)$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      },

      chunkSizeWarningLimit: 500
    }
  };
});
