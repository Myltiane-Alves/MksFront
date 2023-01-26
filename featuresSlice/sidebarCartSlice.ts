import { createSlice } from "@reduxjs/toolkit"

const initialState: {view: boolean} = {view: false}

export const sidebarCartSlice = createSlice({
    name: "cartSidebar",
    initialState,
    reducers:{
        show: (state) => {
            state.view = true;
        },
        hide: (state) => {
            state.view = false;
        }
    }
});

export const {show, hide} = sidebarCartSlice.actions;

export default sidebarCartSlice.reducer;