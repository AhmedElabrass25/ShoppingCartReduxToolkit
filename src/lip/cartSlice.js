import { createSlice } from "@reduxjs/toolkit";

function getDataFromLocalStorage() {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
}
// >>>>>>>>>>>>
function saveDataInLocalStorage(items) {
    localStorage.setItem("cart", JSON.stringify(items));
}
// >>>>>>>>>>>>
function getTotalPrice(items) {
    const total = items
        .map((item) => item.price * item.quantity)
        .reduce((x, y) => x + y, 0);
    return total.toFixed(2);
}
// >>>>>>>>>>>>
let initialState = {
    items: getDataFromLocalStorage(),
    totalPrice: getTotalPrice(getDataFromLocalStorage()), //VIP
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // >>>>>>>>>>
        // add Item To Cart Function
        // >>>>>>>>>>
        addToCart(state, action) {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1 });
            }
            saveDataInLocalStorage(state.items);
            state.totalPrice = getTotalPrice(state.items);
        },
        // >>>>>>>>>>
        // Remove Item From Cart Function
        // >>>>>>>>>>
        removeItemFromCart(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
            state.totalPrice = getTotalPrice(state.items);
            saveDataInLocalStorage(state.items);
        },
        // >>>>>>>>>>
        // inCrease Quatity of Item in Cart Function
        // >>>>>>>>>>
        inCreaseQuatity(state, action) {
            let item = state.items.find((item) => item.id === action.payload);
            if (item) {
                // console.log(item.quantity);
                // console.log(action.payload);
                item.quantity += 1;
            }
            saveDataInLocalStorage(state.items);
            state.totalPrice = getTotalPrice(state.items);
        },
        // >>>>>>>>>>
        // deCrease Quatity of Item in Cart Function
        // >>>>>>>>>>
        deCreaseQuantity(state, action) {
            let item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                // console.log(item.quantity);
                // console.log(action.payload);
                item.quantity -= 1;
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
            saveDataInLocalStorage(state.items);
            state.totalPrice = getTotalPrice(state.items);
        },
    },
});
export let cartReducer = cartSlice.reducer;
export let {
    addToCart,
    inCreaseQuatity,
    deCreaseQuantity,
    removeItemFromCart,
} = cartSlice.actions;