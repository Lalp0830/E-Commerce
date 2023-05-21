import React from 'react';


const Loader = (props) => {
    console.log('loader',process.env.T)
    return (
        <>
            {props.text}
        </>
    )
}
export default Loader;
