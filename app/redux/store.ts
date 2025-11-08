import { configureStore } from '@reduxjs/toolkit';
import testingSlice from './slices/testing';

const store = configureStore({
    reducer: {
        testing: testingSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;