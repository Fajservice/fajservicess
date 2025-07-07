import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  const isDevelopment = mode === 'development'
  
  return {
    plugins: [
      react({
        fastRefresh: true
      })
    ],
       base: '/dist/',
    
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
              if (id.includes('lodash') || id.includes('axios') || id.includes('date-fns')) {
                return 'utils'
              }
              return 'vendor'
            }

            if (id.includes('src/components')) {
              return 'components'
            }
            if (id.includes('src/pages')) {
              return 'pages'
            }
          },
          
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop().replace('.jsx', '').replace('.tsx', '') : 'chunk'
            return `js/${facadeModuleId}-[hash].js`
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.')
            let extType = info[info.length - 1]
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'media'
            } else if (/\.(png|jpe?g|gif|svg|ico|webp)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'images'
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'fonts'
            }
            return `${extType}/[name]-[hash][extname]`
          }
        }
      },
      
      chunkSizeWarningLimit: 500,
      target: 'es2020',
      sourcemap: false, 
      cssCodeSplit: true, 
      assetsInlineLimit: 4096, 
      
      cssMinify: true,
      
      reportCompressedSize: true
    },
    
    preview: {
      port: 3000,
      host: true
    },
    
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['@vite/client', '@vite/env']
    },
    
    define: {
      __DEV__: isDevelopment,
      __PROD__: isProduction
    }
  }
})