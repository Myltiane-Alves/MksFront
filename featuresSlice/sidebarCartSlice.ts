import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     isCartOpen: false
// }
const initialState: {view: boolean} = {view: false}
export const sidebarCartSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers:{
        // openCart(state, action) {
        //     state.isCartOpen = action.payload;
        // },
        // toggleCart(state, action) {
        //     state.isCartOpen = action.payload
        // },
        show: (state) => {
            state.view = true;
        },
        hide: (state) => {
            state.view = false;
        }
    }
});

export const { hide, show} = sidebarCartSlice.actions;

export default sidebarCartSlice.reducer;