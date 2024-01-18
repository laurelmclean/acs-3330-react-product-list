import React from 'react';

function Product({ product }) {
    return (
        <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{product.price}</p>
        </div>
    );
}

export default Product;