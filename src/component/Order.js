import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { emptyCart } from '../redux/action/index'
const Order = () => {

    const state = useSelector((state) => state.handleCart)
    console.log('order', state);
    const dispatch = useDispatch()
    const getCart = (state) => {
        dispatch(emptyCart(state));
    }

    useEffect(() => {
        getCart(state);
    }, []);

    return (
        <>
            Thank you. Your Order is placed
        </>
    )
}

export default Order