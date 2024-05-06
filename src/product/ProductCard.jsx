import React from 'react';
import dvcImg from '../Dashboard/img/switchboard_4.jpg';

const ProductCard = ({ product }) => {
  return (
    <div className="products-details">
      <div>
        <h3>{product.name}</h3>
        <p>Status: {product.status}</p>
        <p>Product Type: {product.id}</p>
        <p>Partner: {product.type}</p>
        {/* Add more product details as needed */}
      </div>
      <div>
        <img src={dvcImg} alt='' className='h-24'/>
      </div>
    </div>
  );
};

export default ProductCard;