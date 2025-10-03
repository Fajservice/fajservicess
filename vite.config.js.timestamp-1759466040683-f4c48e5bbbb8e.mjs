// vite.config.js
import { defineConfig } from "file:///C:/xampp/htdocs/fajservicess/node_modules/vite/dist/node/index.js";
import react from "file:///C:/xampp/htdocs/fajservicess/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteCompression from "file:///C:/xampp/htdocs/fajservicess/node_modules/vite-plugin-compression/dist/index.mjs";
import { visualizer } from "file:///C:/xampp/htdocs/fajservicess/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { ViteImageOptimizer } from "file:///C:/xampp/htdocs/fajservicess/node_modules/vite-plugin-image-optimizer/dist/index.js";
import cssnano from "file:///C:/xampp/htdocs/fajservicess/node_modules/cssnano/src/index.js";
var vite_config_default = defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [
      react({
        jsxRuntime: "automatic",
        babel: {
          plugins: [
            isProduction && "babel-plugin-transform-react-remove-prop-types"
          ].filter(Boolean)
        }
      }),
      viteCompression({ algorithm: "brotliCompress", ext: ".br", threshold: 10240 }),
      viteCompression({ algorithm: "gzip", ext: ".gz", threshold: 10240 }),
      ViteImageOptimizer({
        jpg: { quality: 70, progressive: true },
        jpeg: { quality: 70, progressive: true },
        png: { quality: 70, compressionLevel: 9 },
        webp: { quality: 75 },
        avif: { quality: 60 },
        svg: { multipass: true }
      }),
      isProduction && visualizer({
        filename: "./dist/bundle-stats.html",
        open: false,
        gzipSize: true,
        brotliSize: true
      })
    ].filter(Boolean),
    build: {
      target: "es2022",
      minify: isProduction ? "terser" : false,
      sourcemap: !isProduction,
      cssCodeSplit: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("react")) return "react-vendor";
              if (id.includes("react-router-dom")) return "router";
              if (id.includes("react-icons")) return "icons";
              return "vendor";
            }
          },
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash].[ext]"
        }
      }
    },
    css: {
      modules: { localsConvention: "camelCaseOnly" },
      postcss: {
        plugins: isProduction ? [cssnano({ preset: "default" })] : []
      }
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-router-dom",
        "bootstrap/dist/js/bootstrap.bundle.min.js"
      ]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmFqc2VydmljZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmFqc2VydmljZXNzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi94YW1wcC9odGRvY3MvZmFqc2VydmljZXNzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcclxuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcclxuaW1wb3J0IGNzc25hbm8gZnJvbSAnY3NzbmFubyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgaXNQcm9kdWN0aW9uID0gbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICByZWFjdCh7XHJcbiAgICAgICAganN4UnVudGltZTogJ2F1dG9tYXRpYycsXHJcbiAgICAgICAgYmFiZWw6IHtcclxuICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAgaXNQcm9kdWN0aW9uICYmICdiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJlYWN0LXJlbW92ZS1wcm9wLXR5cGVzJ1xyXG4gICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICB9XHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgdml0ZUNvbXByZXNzaW9uKHsgYWxnb3JpdGhtOiAnYnJvdGxpQ29tcHJlc3MnLCBleHQ6ICcuYnInLCB0aHJlc2hvbGQ6IDEwMjQwIH0pLFxyXG4gICAgICB2aXRlQ29tcHJlc3Npb24oeyBhbGdvcml0aG06ICdnemlwJywgZXh0OiAnLmd6JywgdGhyZXNob2xkOiAxMDI0MCB9KSxcclxuXHJcbiAgICAgIFZpdGVJbWFnZU9wdGltaXplcih7XHJcbiAgICAgICAganBnOiB7IHF1YWxpdHk6IDcwLCBwcm9ncmVzc2l2ZTogdHJ1ZSB9LFxyXG4gICAgICAgIGpwZWc6IHsgcXVhbGl0eTogNzAsIHByb2dyZXNzaXZlOiB0cnVlIH0sXHJcbiAgICAgICAgcG5nOiB7IHF1YWxpdHk6IDcwLCBjb21wcmVzc2lvbkxldmVsOiA5IH0sXHJcbiAgICAgICAgd2VicDogeyBxdWFsaXR5OiA3NSB9LFxyXG4gICAgICAgIGF2aWY6IHsgcXVhbGl0eTogNjAgfSxcclxuICAgICAgICBzdmc6IHsgbXVsdGlwYXNzOiB0cnVlIH1cclxuICAgICAgfSksXHJcblxyXG4gICAgICBpc1Byb2R1Y3Rpb24gJiYgdmlzdWFsaXplcih7XHJcbiAgICAgICAgZmlsZW5hbWU6ICcuL2Rpc3QvYnVuZGxlLXN0YXRzLmh0bWwnLFxyXG4gICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgIGd6aXBTaXplOiB0cnVlLFxyXG4gICAgICAgIGJyb3RsaVNpemU6IHRydWVcclxuICAgICAgfSlcclxuICAgIF0uZmlsdGVyKEJvb2xlYW4pLFxyXG5cclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHRhcmdldDogJ2VzMjAyMicsXHJcbiAgICAgIG1pbmlmeTogaXNQcm9kdWN0aW9uID8gJ3RlcnNlcicgOiBmYWxzZSxcclxuICAgICAgc291cmNlbWFwOiAhaXNQcm9kdWN0aW9uLFxyXG4gICAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxyXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcclxuICAgICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdyZWFjdCcpKSByZXR1cm4gJ3JlYWN0LXZlbmRvcic7XHJcbiAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdyZWFjdC1yb3V0ZXItZG9tJykpIHJldHVybiAncm91dGVyJztcclxuICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3JlYWN0LWljb25zJykpIHJldHVybiAnaWNvbnMnO1xyXG4gICAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXS5qcycsXHJcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLltleHRdJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjc3M6IHtcclxuICAgICAgbW9kdWxlczogeyBsb2NhbHNDb252ZW50aW9uOiAnY2FtZWxDYXNlT25seScgfSxcclxuICAgICAgcG9zdGNzczoge1xyXG4gICAgICAgIHBsdWdpbnM6IGlzUHJvZHVjdGlvbiA/IFtjc3NuYW5vKHsgcHJlc2V0OiAnZGVmYXVsdCcgfSldIDogW11cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICdyZWFjdCcsXHJcbiAgICAgICAgJ3JlYWN0LWRvbScsXHJcbiAgICAgICAgJ3JlYWN0LXJvdXRlci1kb20nLFxyXG4gICAgICAgICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcycsXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4USxTQUFTLG9CQUFvQjtBQUMzUyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxxQkFBcUI7QUFDNUIsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUywwQkFBMEI7QUFDbkMsT0FBTyxhQUFhO0FBRXBCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sZUFBZSxTQUFTO0FBRTlCLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxRQUNKLFlBQVk7QUFBQSxRQUNaLE9BQU87QUFBQSxVQUNMLFNBQVM7QUFBQSxZQUNQLGdCQUFnQjtBQUFBLFVBQ2xCLEVBQUUsT0FBTyxPQUFPO0FBQUEsUUFDbEI7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUVELGdCQUFnQixFQUFFLFdBQVcsa0JBQWtCLEtBQUssT0FBTyxXQUFXLE1BQU0sQ0FBQztBQUFBLE1BQzdFLGdCQUFnQixFQUFFLFdBQVcsUUFBUSxLQUFLLE9BQU8sV0FBVyxNQUFNLENBQUM7QUFBQSxNQUVuRSxtQkFBbUI7QUFBQSxRQUNqQixLQUFLLEVBQUUsU0FBUyxJQUFJLGFBQWEsS0FBSztBQUFBLFFBQ3RDLE1BQU0sRUFBRSxTQUFTLElBQUksYUFBYSxLQUFLO0FBQUEsUUFDdkMsS0FBSyxFQUFFLFNBQVMsSUFBSSxrQkFBa0IsRUFBRTtBQUFBLFFBQ3hDLE1BQU0sRUFBRSxTQUFTLEdBQUc7QUFBQSxRQUNwQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsUUFDcEIsS0FBSyxFQUFFLFdBQVcsS0FBSztBQUFBLE1BQ3pCLENBQUM7QUFBQSxNQUVELGdCQUFnQixXQUFXO0FBQUEsUUFDekIsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsWUFBWTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQ0gsRUFBRSxPQUFPLE9BQU87QUFBQSxJQUVoQixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixRQUFRLGVBQWUsV0FBVztBQUFBLE1BQ2xDLFdBQVcsQ0FBQztBQUFBLE1BQ1osY0FBYztBQUFBLE1BQ2QsZUFBZTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsZUFBZTtBQUFBLFFBQ2pCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sYUFBYSxJQUFJO0FBQ2YsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixrQkFBSSxHQUFHLFNBQVMsT0FBTyxFQUFHLFFBQU87QUFDakMsa0JBQUksR0FBRyxTQUFTLGtCQUFrQixFQUFHLFFBQU87QUFDNUMsa0JBQUksR0FBRyxTQUFTLGFBQWEsRUFBRyxRQUFPO0FBQ3ZDLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQSxVQUNBLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILFNBQVMsRUFBRSxrQkFBa0IsZ0JBQWdCO0FBQUEsTUFDN0MsU0FBUztBQUFBLFFBQ1AsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFFBQVEsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQUEsTUFDOUQ7QUFBQSxJQUNGO0FBQUEsSUFFQSxjQUFjO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
