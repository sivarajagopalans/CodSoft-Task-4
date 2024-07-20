import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: []
}

const productSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cartList.push(action.payload);
        },
        removeCart: (state, action) => {
            state.cartList = state.cartList.filter((item) => item.id != action.payload);
        }
    }
})

export const { addCart, removeCart } = productSlice.actions;
export default productSlice.reducer;