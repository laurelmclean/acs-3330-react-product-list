import React from 'react';
import './Product.css'

function starRating(rating) {
    const roundedRating = Math.round(rating);
    return '★'.repeat(roundedRating);
}
function Product({ product }) {

    const classname = product.units === 0 ? 'disabled' : "product";
    
    return (
        <div key={product.id} className={classname}>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>Units: {product.units}</p>
            <p>{starRating(product.rating)}</p>
        </div>
    );
}

export default Product;