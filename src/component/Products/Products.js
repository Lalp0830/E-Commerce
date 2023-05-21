import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import Loader from '../common/Loader'
// import Product from '../component/common/Product'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState(products);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        //console.log(`${process.env.API_BASE_URL}${process.env.API_PRODUCTS}`)
        const request = await axios.get("https://fakestoreapi.com/products");
        console.log(request.data);
        if (request) {
            setLoading(false);
            setProducts(request.data);
            setFilter(request.data);
        }
    };

    const filterProduct = (cat) => {
        const updatedlist = products.filter((x) => x.category === cat);
        setFilter(updatedlist);
    }
    
    const cardItem = (product) => {
        return (
            <div class="card my-5 py-4" key={product.id} style={{ width: "18rem" }}>
                <img src={product.img} class="card-img-top" alt={product.title} />
                <div class="card-body text-center">
                    <h5 class="card-title">{product.title}</h5>
                    <p className="lead">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    }














    const ShowProducts = () => {
        return (
            <>
                <div className="button d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-primary ms-2" onClick={() => { setFilter(products) }} >All</button>
                    <button className="btn btn-outline-primary ms-2" onClick={() => { filterProduct("men's clothing") }}>Men's Cloths</button>
                    <button className="btn btn-outline-primary ms-2" onClick={() => { filterProduct("women's clothing") }}>Women's Cloths</button>
                    <button className="btn btn-outline-primary ms-2" onClick={() => { filterProduct("jewelery") }}>Jewelery</button>
                    <button className="btn btn-outline-primary ms-2" onClick={() => { filterProduct("electronics") }}>Electronics</button>
                </div>
                {filter.map(
                    (product) => {
                        return (
                            <>
                                <div key={product.id} className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" key={product.id}>
                                        <img src={product.image} className="card-img-top" alt={product.title} height="300px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                            <p className="card-text lead fw-bolder">${product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                )}
            </>
        )
    }
    return (
        <div>
            <div className="container my-3 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="display-6 fw-bolder text-center text-black-50">
                            LATEST PRODUCTS
                        </h2><hr />
                    </div>
                </div>
                <div className="row justify-content-center">

                    {loading ? <Loader text="Your products are loading..." /> : <ShowProducts />}

                </div>

            </div>
        </div>
    )
}
export default Products;
