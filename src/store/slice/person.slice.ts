import { PersonProps, StoreSlice } from '../type';

// 创建 store
const createUserSlice: StoreSlice<PersonProps> = (set, get) => ({
  times: 1
});

export default createUserSlice;
