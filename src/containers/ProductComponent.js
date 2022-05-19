import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import ProductItem from './ProductItem';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const { id, title } = products[0];
    return (
        <>
            {Object.keys(products).length === 0 ? <div className="container"> ...Loading </div> : products.map((product,key) => {
                return (
                    <div className="col-md-6 col-lg-4 col-xl-3 mt-4" key={key}>
                        <ProductItem product={product} />
                    </div>
                )
            })}
        </>
    )
}

export default ProductComponent
