import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  let productName = '';
    if (products && products.title) {
      productName = products.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }
    
    
        const location = useLocation();
        const urlId = location.pathname.split('/').pop(); // get ID from URL
        console.log(urlId)
        const finalUrl = `https://example.com/${urlId}-${productName}`;
        console.log(finalUrl)
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${urlId}-${productName}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;