import { configureStore } from '@reduxjs/toolkit';
import productsSlices from './slices/productsSlices';


export const store = configureStore({
    reducer: {
        products: productsSlices
    }
})
