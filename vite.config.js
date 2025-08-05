import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
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

      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 10240,
        deleteOriginFile: false
      }),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 10240,
        deleteOriginFile: false
      }),

      ViteImageOptimizer({
        avif: { quality: 80 },
        png: { quality: 80 },
        jpeg: { quality: 80 },
        webp: { lossless: false }
      }),

      isProduction && visualizer({
        filename: './dist/bundle-stats.html',
        open: false,
        gzipSize: true
      })
    ].filter(Boolean),

    build: {
      target: 'es2022',
      minify: isProduction ? 'terser' : false,
      sourcemap: !isProduction,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        }
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react')) return 'react-vendor';
              if (id.includes('router')) return 'router';
              return 'vendor';
            }
          }
        }
      }
    },
    // run local
    // server: {
    //   host: true,
    //   port: 5173,
    // },
    // remove above live local run
    css: {
      modules: {
        localsConvention: 'camelCaseOnly'
      },
      postcss: {
        plugins: isProduction ? [
          cssnano({ preset: 'default' })
        ] : []
      }
    }
  };
});