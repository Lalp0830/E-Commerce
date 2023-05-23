import React from 'react';

const Loader = (props) => {
    return (
        <>
            <div className="spinner-border" role="status">
                <span className="sr-only">{props.text}</span>
                 
            </div>
            <div className="row text-center">
                <strong>
                {props.text}
                </strong>

            </div>

        </>
    )
}
export default Loader;
