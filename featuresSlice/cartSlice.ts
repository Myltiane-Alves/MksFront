import { CartItem } from "@/types/CartItem";
import { Product } from "@/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
    countItems: number,
    items: Product[],
    totalItems: Product[],
    totalPrice: number,
} = {
    countItems: 0,
    items: [],
    totalItems: [],
    totalPrice: 0
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, {payload}) => {
            state.countItems = state.countItems + 1
            const productFind = state.items.find((item) => {
                return item.id === payload.id
            });

            state.totalItems = [...state.totalItems, payload];
            !productFind ? state.items = [...state.items, payload] : "";
        },
        removeFromCart(){

        },
        incrementQuantity(){

        },
        decrementQuantity(){

        },
        batchRemove(){

        },
        toggleInclude(){

        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    batchRemove,
    toggleInclude,
} = cartSlice.actions;

export default cartSlice.reducer;