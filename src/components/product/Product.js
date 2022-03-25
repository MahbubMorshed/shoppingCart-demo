import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = ({product, handleAddToCart}) => {
    const {name, img, seller, price, ratings} = product;
    // const {product, handleAddToCart} = props;
  return (
    <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
          <p className='product-name'>{name}</p>
          <p>Price: ${price}</p>
          <p><small>Seller: {seller}</small></p>
          <p><small>Retings: {ratings} stars</small></p>
        </div>
        <button onClick={() => handleAddToCart(product)} className='btn-cart'>
          <p className='btn-text'>add to cart</p>
          <FontAwesomeIcon icon={faShoppingCart}/>
        </button>
    </div>
  );
}

export default Product