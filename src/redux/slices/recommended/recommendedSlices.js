import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../data/Products";

// Slices
const recommendedSlices = createSlice({
    name: "recommended",
    initialState: {
        recommended: products[Math.floor(Math.random()*products.length)]
    },
    reducers: {
        'GET_RECOMMENDED': (state, action) => {
        return state
        }
    }
});

export const { GET_RECOMMENDED } = recommendedSlices.actions;

export default recommendedSlices.reducer;