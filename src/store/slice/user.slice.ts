import { UserProps, StoreSlice } from '../type';

// 创建 store
const createUserSlice: StoreSlice<UserProps> = (set, get) => ({
  count: 1,
  add: () => {
    const state = get();
    set({ count: state.count + 1 });
  }
});

export default createUserSlice;
