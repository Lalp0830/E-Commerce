import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import makeRequest from '../../helpers/request';

const Filters = (props) => {
    const selectedFilter = useSelector((state) => state.selectedProductFilters);
    const { getFilterProduct } = props;
    const url = `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_CATEGORIES}`;
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await makeRequest(url);
        
        if(response?.data){ 
            setCategories(response?.data);
        }
    };
    return (
        <div className="button d-flex justify-content-center mb-5 pb-5">
            <button className={(selectedFilter === "") ? "btn btn-primary ms-2" : "btn btn-outline-primary ms-2"} onClick={() => { getFilterProduct("") }} >ALL</button>
            {
                categories.map((cat) =>{
                    return (
                        <>
                            <button className={(selectedFilter === cat) ? "btn btn-primary ms-2" : "btn btn-outline-primary ms-2"} onClick={() => { getFilterProduct(cat) }}>{cat.toUpperCase()}</button>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Filters;