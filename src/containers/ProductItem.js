import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const { id, title, image, price, category } = props.product;

    return (    
                <Link className="card h-100" to={`/product/${id}`} style={{ "textDecoration": "none", "width": "16rem" }} >
                    <div className="h-50 mx-auto my-3 d-flex">
                        <img src={image} className
                            ="my-auto" style={{ "maxHeight": "10rem", "maxWidth": "10rem" }} alt={title} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title ">{title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"></li>
                        <li className="list-group-item">$ {price}</li>
                        <li className="list-group-item">{category}</li>
                    </ul>
                </Link>
    )
}

export default ProductItem
