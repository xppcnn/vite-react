#vite-react

使用vite搭建react项目， 集成了antd,antd-mobile v5，zustand

自动获取pages文件夹下的文件并生成routes

根据store/slice下的文件为storeSlice,会自动合并store
目前存在不同storeSlice文件中相同的state 被别合并 待优化 考虑加入namespace