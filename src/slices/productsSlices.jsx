import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardsList: []
}

const productSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cardsList.push(action.payload);
        },
        removeCart: (state, action) => {
            state.cardsList = state.cardsList.filter((item) => item.id != action.payload);
        }
    }
})

export const { addCart, removeCart } = productSlice.actions;
export default productSlice.reducer;