import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import cssnano from 'cssnano'; // Added

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
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
              if (id.includes('react-router')) return 'router';
              if (id.includes('lodash')) return 'lodash';
              return 'vendor';
            }
            if (id.includes('src/pages/Home')) return 'home';
          }
        }
      }
    },

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