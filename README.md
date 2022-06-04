#vite-react

使用 vite 搭建 react 项目， 集成了 antd,antd-mobile v5，zustand

根据 store/slice 下的文件为 storeSlice,会自动合并 store
目前存在不同 storeSlice 文件中相同的 state 被别合并 待优化 考虑加入 namespace

扫描 pages 文件下所有 tsx 文件，根据 routes 文件夹下 config 的 pageUrl 匹配相应组件，并 dynamic import
