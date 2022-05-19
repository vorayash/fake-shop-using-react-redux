import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from "axios";
import { removeProduct, setProducts, } from "../redux/actions/productActions";
const ProductListing = () => {
 
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Erre", err);
            })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
        dispatch(removeProduct());
    },[])
    return (
        <div className="container">
            <div className="row">
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing
