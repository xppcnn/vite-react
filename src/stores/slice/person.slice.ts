import { PersonProps, StoreSlice } from '../type';

// 创建 store
const createUserSlice: StoreSlice<PersonProps> = () => ({
  times: 1
});

export default createUserSlice;
