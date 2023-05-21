import React,{ useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { useParams } from "react-router-dom";
import Loader from '../common/Loader'
import { NavLink } from 'react-router-dom';
import axios from "axios";

const ProductDetails =(props) =>{
    const {id}= useParams();
    const [product,setproduct]= useState([]);
    const [loading,setLoading]=useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(addCart(product));
    }

    useEffect(()=>{
        const getProductDetails = async () =>{
            setLoading(true);
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            // console.log(response.json());
            setproduct(response.data);
            setLoading(false);
        }
        getProductDetails();
    },[]);

    const ShowProducts = () =>{
        return(
            <>
             <div className="col-md-6 py-6">
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
             </div>
             <div className={`col-md-6 text-${props.mode == 'light' ? 'dark' : 'light'}`}>
                <h4 classNmae="text-uppercase text-black-50">{product.ctegory}</h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder ">Raiting{product.rating && product.rating.rate}<i className="fa fa-star"></i></p>
                <h3 className="display-3 fw-bolder my-4">${product.price}</h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-dark px-3 py-2" onClick={()=>addProduct(product)}>Add to cart</button>
                <NavLink to=" /cart" className="btn btn-dark ms-2 px-3 py-2">Go to cart</NavLink>
             </div>
             
            </>
        )
    }
    return(
        <>
        <div className="container py-5">
            <div className="row py-5">
            {loading ? <Loader text="Your products are loading..." /> : <ShowProducts />}
            </div>
        </div>
        </>
    )
    
}

export default ProductDetails