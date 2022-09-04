import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../../data/Categories";

// Slices
const categoriesSlices = createSlice({
    name: "categories",
    initialState: {
        categories: Categories,
        selectedCategory: null,
    },
    reducers: {
        'SELECTED_CATEGORY': (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload === state.selectedCategory ? null : action.payload,
            };
        }
    }
});

export const { SELECTED_CATEGORY } = categoriesSlices.actions;

export default categoriesSlices.reducer;