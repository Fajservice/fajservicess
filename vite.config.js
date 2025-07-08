import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  const isDevelopment = mode === 'development'

  return {
    plugins: [
      react({
        fastRefresh: true
      }),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 1024,
      }),
    ],

    // CRITICAL: Set base to '/' for Vercel deployment
    base: '/',

    build: {
      minify: 'esbuild',
      
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendor'
              }
              if (id.includes('react-router')) {
                return 'router'
              }
              return 'vendor'
            }

            // IMPORTANT: More specific chunking for your components
            if (id.includes('src/Layout')) {
              return 'layout'
            }
            if (id.includes('src/Pages')) {
              // Group all pages together for now
              return 'pages'
            }
          },

          // CRITICAL: Ensure proper file naming
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      },

      chunkSizeWarningLimit: 1000,
      target: 'es2020',
      sourcemap: false,
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
      cssMinify: true,
      reportCompressedSize: false
    },

    // CRITICAL: Ensure all dependencies are included
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },

    // IMPORTANT: Add resolve aliases
    resolve: {
      alias: {
        '@': '/src'
      }
    },

    define: {
      __DEV__: isDevelopment,
      __PROD__: isProduction
    }
  }
})