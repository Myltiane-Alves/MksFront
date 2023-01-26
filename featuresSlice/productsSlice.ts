import { Product } from "@/types/Product"
import loadProducts from "@/utils/loadProducts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: {
    allProducts: Product[],
    isLoading: boolean
} = {
    allProducts: [],
    isLoading: false
}
export const fetchProducts = createAsyncThunk("products/getProducts", async () => {
    const response = loadProducts().then(data => data);
    return response;

});

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        enLoading: state => {
            state.isLoading = false;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allProducts = action.payload;
        })
    }
});

export const {startLoading, enLoading} = productsSlice.actions;
export default productsSlice.reducer;