
import cartSlice from "@/featuresSlice/cartSlice";
import productsSlice from "@/featuresSlice/productsSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;