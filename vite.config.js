import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    plugins: [
      react({
        babel: {
          plugins: isProd ? ['babel-plugin-transform-react-remove-prop-types'] : [],
        },
      }),

      isProd &&
        visualizer({
          filename: 'dist/stats.html',
          gzipSize: true,
          brotliSize: true,
        }),

      isProd &&
        viteCompression({
          algorithm: 'brotliCompress',
          ext: '.br',
          threshold: 1024,
          deleteOriginFile: false,
        }),
      isProd &&
        viteCompression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 1024,
          deleteOriginFile: false,
        }),
    ].filter(Boolean),

    build: {
      target: 'es2020',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          passes: 2,
        },
        mangle: {
          safari10: true,
        },
        format: {
          comments: false,
        },
      },
      sourcemap: false,
      cssCodeSplit: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 500,
      assetsInlineLimit: 4096,

      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react-dom')) return 'react-dom';
              if (id.includes('react') && !id.includes('react-router') && !id.includes('react-helmet')) return 'react';
              if (id.includes('react-router')) return 'router';
              if (id.includes('react-helmet')) return 'helmet';
              if (id.includes('swiper')) return 'swiper';
              if (id.includes('lodash')) return 'lodash';
              if (id.includes('axios')) return 'axios';
              return 'vendor';
            }
          },

          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(css)$/.test(name ?? '')) return 'assets/css/[name]-[hash][extname]';
            if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(name ?? '')) return 'assets/images/[name]-[hash][extname]';
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },

    server: {
      fs: {
        strict: true,
      },
    },
  };
});
