import { createSlice } from '@reduxjs/toolkit';

interface ICollapsedState {
  collapsed: boolean;
}

const initialState: ICollapsedState = {
  collapsed: true,
};


const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    toggleMenusCollapsed: (state: ICollapsedState) => {
      state.collapsed = !state.collapsed;
    },
  },
  extraReducers: {},
});

export const { toggleMenusCollapsed } = demoSlice.actions;
export default demoSlice