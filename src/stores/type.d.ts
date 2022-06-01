/* eslint-disable no-unused-vars */

import { GetState, SetState } from 'zustand';
export type StoreSlice<T extends object, E extends object = T> = (
  set: SetState<E extends T ? E : E & T>,
  get: GetState<E extends T ? E : E & T>
) => T;

// 类型声明
export interface UserProps {
  count: number;
  add: () => void;
  dec: () => void;
}

// 类型声明
export interface PersonProps {
  times: number;
}
