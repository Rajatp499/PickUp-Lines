import { configureStore } from "@reduxjs/toolkit";
import selectedItemsSlice  from "./slices/Slices";

const Store =configureStore({
    reducer: {
        selectedItems: selectedItemsSlice,
    },
});

export default Store;