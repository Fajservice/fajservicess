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

      viteCompression({ algorithm: 'brotliCompress', ext: '.br', threshold: 10240 }),
      viteCompression({ algorithm: 'gzip', ext: '.gz', threshold: 10240 }),

      ViteImageOptimizer({
        jpg: { quality: 70, progressive: true },
        jpeg: { quality: 70, progressive: true },
        png: { quality: 70, compressionLevel: 9 },
        webp: { quality: 75 },
        avif: { quality: 60 },
        svg: { multipass: true }
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
      minify: isProduction ? 'terser' : false,
      sourcemap: !isProduction,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react')) return 'react-vendor';
              if (id.includes('react-router-dom')) return 'router';
              if (id.includes('bootstrap')) return 'bootstrap';
              if (id.includes('react-slick') || id.includes('slick-carousel')) return 'slick';
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
