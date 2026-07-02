import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import {seoperender} from "./ssr.config";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  let env = loadEnv(mode, process.cwd())
  return {
    define: {  
      'process.env.NODE_ENV': JSON.stringify('production')  
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      seoperender()
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        // 为 v-code-diff 指定正确的入口
        "v-code-diff": path.resolve(__dirname, "node_modules/v-code-diff/dist/index.js")
      }
    },
    optimizeDeps: {
      include: ['v-code-diff']
    },
    server: {
      host: env.VITE_HOST,
      proxy: {
        [env.VITE_APP_BASE_API] : {
          target: env.VITE_SERVE,
          changeOrigin: true,
        },
      }
    }
  }
})
