// For Add Item to cart
export const addProductFilter = (filter) => {
    return {
        type: "ADD_PRODUCT_FILTER",
        payload: filter
    }
}

// For Delete Item from cart
export const deletProductFilter = (filter) => {
    return {
        type: "REMOVE_PRODUCT_FILTER",
        payload: filter
    }
}