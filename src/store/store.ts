import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { userSlice } from './slice/user.slice';
// import { collapsedSlice } from './slice/collapsed.slice';
// import { menusSlice } from './slice/menus.slice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// 读取所以slice的reducers
const loadReducer = () => {
  const context = import.meta.globEager("./slice/*.slice.ts");
  const reducers: any = {};
  const pages = Object.keys(context);
  for (let key of pages) {
    const slice = context[key].default;
    const reducer = slice.reducer;
    const namespace = slice.name;
    if (reducers[namespace]) {
      throw 'slice文件的namespace存在重复，请修改'
    }
    Object.assign(reducers, { [namespace]: reducer })
  }
  return reducers;
}
// 合并多个reducer
const rootReducer = combineReducers({
  ...loadReducer()
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// eslint-disable-next-line
const middlewareHandler = (getDefaultMiddleware: any) => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
  ];

  return middlewareList;
};

export const rootStore = configureStore({
  reducer: rootReducer,
  // 可以添加自己的中间件,比如打印日志的
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
  devTools: true,
});

// export const persistor = persistStore(rootStore);
// 获取全部store数据类型
// export type RootState = ReturnType<typeof rootStore.getState>;

export type AppDispatch = typeof rootStore.dispatch | any;
export type RootState = ReturnType<typeof rootStore.getState |any> ;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
// eslint-disable-next-line
// export default { store, persistor };