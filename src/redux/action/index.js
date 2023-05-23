// For Add Item to cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For Delete Item from cart
export const deletCart = (product) => {
    console.log('dispatch', product);
    return {
        type: "DELITEM",
        payload: product
    }
}

// For empty cart
export const emptyCart = (product) => {
    console.log('dispatch', product);
    return {
        type: "EMPTYCART",
        payload: product
    }
}