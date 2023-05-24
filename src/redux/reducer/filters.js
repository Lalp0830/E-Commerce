// import { configureStore } from '@reduxjs/toolkit'
// import { createSlice } from "@reduxjs/toolkit";

const productFilters = '';

const selectedProductFilters = (state = productFilters, action) => {
    const filter = action.payload;
    switch (action.type) {
        case "ADD_PRODUCT_FILTER":
            return filter;
            break;
        case "REMOVE_PRODUCT_FILTER":
            return productFilters;
            break;

        default: return state;
            break;
    }
}
export default selectedProductFilters;