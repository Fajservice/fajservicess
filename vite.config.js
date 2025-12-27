import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import cssnano from 'cssnano';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      react({
        jsxRuntime: 'automatic',
        babel: {
          plugins: [
            isProduction && 'babel-plugin-transform-react-remove-prop-types'
          ].filter(Boolean)
        }
      }),

      isProduction && visualizer({
        filename: './dist/bundle-stats.html',
        open: false,
        gzipSize: true,
        brotliSize: true
      })
    ].filter(Boolean),

    build: {
      target: 'es2022',
      minify: isProduction ? 'esbuild' : false,
      sourcemap: !isProduction,
      cssCodeSplit: true,
      reportCompressedSize: false,

      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              
              if (id.includes('react-router-dom') || id.includes('@remix-run') || id.includes('react-router')) {
                return 'router';
              }
              
              if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('scheduler')) {
                return 'react-vendor';
              }
              
              if (id.includes('react-icons')) {
                return 'icons';
              }
              
              if (id.includes('swiper')) {
                return 'swiper';
              }
              
              if (id.includes('bootstrap')) {
                return 'bootstrap';
              }
              if (id.includes('react-helmet') || id.includes('helmet')) {
                return 'helmet';
              }
              
              // Everything else
              return 'vendor';
            }
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      },
      chunkSizeWarningLimit: 300,
    },

    css: {
      modules: { localsConvention: 'camelCaseOnly' },
      postcss: {
        plugins: isProduction ? [cssnano({ preset: 'default' })] : []
      }
    },

    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'bootstrap/dist/js/bootstrap.bundle.min.js',
      ]
    }
  };
});