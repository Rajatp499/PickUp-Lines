import { createSlice } from "@reduxjs/toolkit";


const storage = localStorage.getItem('item') !== null ? JSON.parse(localStorage.getItem('item')) : [ ];

const selectedItemsSlice = createSlice({
    name:"items",
    initialState: [...storage],
    reducers:{
        selectItems(state, action){
            // const uniqueid = state.filter((item, index, array) => array.indexOf(item) === index);
            state.push(action.payload);
            // console.log(uniqueid);
            localStorage.setItem('item', JSON.stringify(state));
        },
        disselectItems (state, action){
            const itemToRemove= action.payload.id;
            // console.log(action.payload.id)
            // const lll = state.filter((i) => console.log(i));
            // console.log(lll);
            const updatedState = state.filter((i) => i.id !== itemToRemove);
            localStorage.setItem('item', JSON.stringify(updatedState));
            return updatedState;
        },
    },
});

//uniqueid Slice

export default selectedItemsSlice.reducer;
export const  {selectItems} = selectedItemsSlice.actions;
export const  {disselectItems} = selectedItemsSlice.actions;

