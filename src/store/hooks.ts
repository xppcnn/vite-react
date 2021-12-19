import { useSelector as useReduxSelector, useDispatch as useReduxDispatch ,TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();