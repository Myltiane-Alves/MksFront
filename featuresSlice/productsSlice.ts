import { Product } from "@/types/Product"
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
        
    }
})