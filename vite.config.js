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
        gzipSize: false,
        brotliSize: false
      })
    ].filter(Boolean),

    build: {
      target: 'es2022',
      minify: isProduction ? 'esbuild' : false,
      sourcemap: !isProduction,
      cssCodeSplit: false,
      reportCompressedSize: false,

      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react')) return 'react-vendor';
              if (id.includes('react-router-dom')) return 'router';
              if (id.includes('react-icons')) return 'icons';
              return 'vendor';
            }
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      }
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
