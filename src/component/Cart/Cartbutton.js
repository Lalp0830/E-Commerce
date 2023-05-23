import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
    const state = useSelector((state) => state.handleCart)
    return (

        <div className="buttons cartBtn">
            <NavLink to={`${process.env.REACT_APP_BASE_URL}/cart`} className="btn btn-outline-primary ms-2"><i className="fa fa-shopping-cart me-1"></i>{props.lable}({state.length})</NavLink>
        </div>

    )
}
export default CartButton