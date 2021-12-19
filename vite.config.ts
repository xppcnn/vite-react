import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 实时刷新
import reacrRefresh from '@vitejs/plugin-react-refresh'
// 按需加载
import vitePluginImp from 'vite-plugin-imp'
import styleImport from "vite-plugin-style-import";
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    reacrRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
    styleImport({
      libs: [
        {
          libraryName: "antd-mobile",
          base: "antd-mobile/es/global",
          resolveComponent: (name) => `antd-mobile/es/components/${name}`,
          resolveStyle: () => "antd-mobile/es/global/global.css",
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: { '@primary-color': '#1DA57A' },
      }
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://47.99.134.126:28019/api/v1',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
})
