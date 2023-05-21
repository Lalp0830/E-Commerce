import React from 'react'
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return (
        <div className="container">
            <div className="row">
                <NavLink to={props.link} className="btn btn-outline-primary mb-5 w-25 mx-auto">{props.text}</NavLink>
            </div>
        </div>
    );
}
export default Button