import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice";
import { cartReducer } from "./cartSlice";

export let store = configureStore({
    reducer: {
        allProducts: productReducer,
        cart: cartReducer,
    },
});