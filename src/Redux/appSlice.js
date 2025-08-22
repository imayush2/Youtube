import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name :"app",
    initialState: {
        isSlideBarOpen: true,
    },
    reducers: {
        toggleMenu : (state)=>{
            state.isSlideBarOpen = !state.isSlideBarOpen;
        }     
    }
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;