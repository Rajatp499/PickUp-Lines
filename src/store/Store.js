import { configureStore } from "@reduxjs/toolkit";
import {selectedItemsReducer}  from "./slices/Slices";

const Store =configureStore({
    reducer: {
        selectedItems: selectedItemsReducer,
    },
});

export default Store;