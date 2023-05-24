import {combineReducers} from "@reduxjs/toolkit"
import handleCart from "./handleCart";
import selectedProductFilters from "./filters";

const rootReducers = combineReducers({
    handleCart,
    selectedProductFilters,
})
export default rootReducers