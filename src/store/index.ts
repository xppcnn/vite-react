import create, { GetState, SetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware';
const loadStore = (set: SetState<any>, get: GetState<any>) => {
  const context = import.meta.globEager("./slice/*.slice.ts");
  const store: any = {};
  const slices = Object.keys(context);
  for (let key of slices) {
    const slice = context[key].default;
    Object.assign(store, slice(set, get))
  }
  return store;
}


const useStore = create(devtools(
  persist((set: SetState<any>, get: GetState<any>) => ({
    ...loadStore(set, get),
  }), {
    name: 'a', partialize: (state => ({ count: state.count }))
  })
))

export default useStore
