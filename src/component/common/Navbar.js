import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import handleCart from '../../redux/reducer/handleCart';
import CartButton from '../Cart/Cartbutton';

const Navbar = (props) => {

    const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-3 shadow-sm`}>
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-8" to="#">E-Commerce</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <CartButton lable='Cart'/>
                        <div className={`form-check form-switch text-${props.mode == 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                            <label className="form-check-label ms-1" htmlFor="flexSwitchCheckDefault">Light Mode</label>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Navbar;