import React from 'react';

function CategoryButton({ label, onClick, key }) {
    return (
        <button key={key} className="category-button" onClick={onClick}>
            {label}
        </button>
    );
}

export default CategoryButton;