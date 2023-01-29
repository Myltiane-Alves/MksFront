
import cartSlice from "../featuresSlice/cartSlice";
import productsSlice from "../featuresSlice/productsSlice";
import sidebarCartSlice from "../featuresSlice/sidebarCartSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsSlice,
        sidebar: sidebarCartSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;