import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.selectedProduct)
  const dispatch = useDispatch();
  const { id, title, description, image, price, category } = product;
  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Err", err))
      dispatch(selectProduct(response.data));
  }

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  return (
    <>
      {id === undefined ? <div className="container"> ...Loading </div> : (<div className="container mt-4 " key={id}>
        <div className="card mx-auto" style={{ "width": "20rem" }} >
            <img src={image} className="card-img-top mx-auto" style={{ "width": "10rem" }} alt={title} />
            <div className="card-body">
              <h5 className="card-title ">{title}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{description}</li>
              <li className="list-group-item">$ {price}</li>
              <li className="list-group-item">{category}</li>
            </ul>
        </div>
      </div>)}
    </>
  )
}

export default ProductDetail
