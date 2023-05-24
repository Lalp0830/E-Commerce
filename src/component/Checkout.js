import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deletCart } from '../redux/action/cart'
import EmptyCart from '../component/Cart/EmptyCart'
import Button from '../component/common/Button'

const Checkout = () => {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()
    const handleProduct = (product) => {
        dispatch(deletCart(product));
    }

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleProduct(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && <EmptyCart />}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && <Button link="/order" text="Place Order" />}

        </>
    )
}

export default Checkout