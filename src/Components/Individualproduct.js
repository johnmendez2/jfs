import React from 'react'
import { useNavigate } from 'react-router-dom';

export const IndividualProduct = ({ individualProduct }) => {
  const navigate = useNavigate();
  let productName = '';
    productName = individualProduct.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  

  const handleProductClick = () => {
    navigate(`/${individualProduct.ID}-${productName}`, { state: { product: individualProduct } });
  };

  return (
    <div className='product'>
      <div className='product-img'>
        <img src={individualProduct.url} alt="product-img"/>
      </div>
      <div className='product-text title'>{individualProduct.title}</div>
      <div className='product-text'>AED {individualProduct.price}</div>
      <div className='product-text size'>Size: {individualProduct.size}</div>
      <div className='btn btn-danger btn-md cart-btn' onClick={handleProductClick}>DETAILS</div>
    </div> 
  )
}
