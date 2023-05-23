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

            <h1 className="display-6 text-center fw-bold mb-4">Thank You</h1>
            <p className="lead text-center mb-4 text-dark-50">Your Order is placed</p>
        </>
    )
}

export default Order