import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../data/Products";
import { getRandom } from "../../../utils/utils";

// Slices
const recommendedSlices = createSlice({
    name: "recommended",
    initialState: {
        recommended: getRandom(products, 4)
    },
    reducers: {
        'GET_RECOMMENDED': (state, action) => {
            return state
        }
    }
});

export const { GET_RECOMMENDED } = recommendedSlices.actions;

export default recommendedSlices.reducer;