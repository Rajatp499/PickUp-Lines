import { createSlice } from "@reduxjs/toolkit";

const selectedItemsSlice = createSlice({
    name:"selectedItems",
    initialState: [],
    reducers:{
        setAllSelectedItems: (state, action) =>{
            state.push(...action.payload);
        },
    }
});

//uniqueid Slice

export const selectedItemsReducer = selectedItemsSlice.reducer;
export const  {setAllSelectedItems} = selectedItemsSlice.actions;