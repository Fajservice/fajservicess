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
              // Core React - loads immediately
              if (id.includes('react-dom')) return 'react-dom';
              if (id.includes('react') && !id.includes('react-icons') && !id.includes('react-router') && !id.includes('react-helmet')) {
                return 'react';
              }
              
              // Router - loads immediately but separate
              if (id.includes('react-router')) return 'router';
              
              // Helmet - small, can be with core
              if (id.includes('react-helmet')) return 'helmet';
              
              // Swiper - lazy loaded, separate chunk
              if (id.includes('swiper')) return 'swiper';
              
              // Icons - lazy loaded, separate by icon library
              if (id.includes('react-icons/md')) return 'icons-md';
              if (id.includes('react-icons/io')) return 'icons-io';
              if (id.includes('react-icons/go')) return 'icons-go';
              if (id.includes('react-icons/bi')) return 'icons-bi';
              if (id.includes('react-icons')) return 'icons';
              
              // Split large vendor libraries
              if (id.includes('lodash')) return 'lodash';
              if (id.includes('axios')) return 'axios';
              if (id.includes('framer-motion')) return 'framer';
              
              // Everything else in vendor
              return 'vendor';
            }
            
            // Split components by page/feature
            if (id.includes('/Components/HeroBanner/')) return 'hero';
            if (id.includes('/Components/Swiper')) return 'swiper-component';
          },

          chunkFileNames: (chunkInfo) => {
            // Add hash for cache busting
            return 'assets/js/[name]-[hash].js';
          },
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(css)$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            if (/\.(woff|woff2|eot|ttf|otf)$/.test(name ?? '')) {
              return 'assets/fonts/[name]-[hash][extname]';
            }
            if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(name ?? '')) {
              return 'assets/images/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },

    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['swiper', 'react-icons'],
    },

    server: {
      fs: {
        strict: true,
      },
    },
  };
});