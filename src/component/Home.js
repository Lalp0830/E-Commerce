import React from 'react'
import Products from './Products/Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-dark border-0">
                <img src="/assets/bg3.jpg" className="card-img" alt="backgroung" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="cointner  ">
                        <h5 className="card-title display-3 fw-bolder">NEW ARRIVALS</h5>
                        <p className="card-text lead fx-2">CHECK OUT ALL THE TREANDS</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}
export default Home;

