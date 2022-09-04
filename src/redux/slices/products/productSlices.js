import { createSlice } from "@reduxjs/toolkit";
import { Products, TotalProducts } from "../../../data/Products";

// Slices
const productSlices = createSlice({
    name: "products",
    initialState: {
        products: Products,
        total: TotalProducts
    },
    reducers: {
        'products': (state, action) => {
            return state;
        }
    }
});

export const { products } = productSlices.actions;

export default productSlices.reducer;