import React from 'react';
import './CategoryButtons.css'

function CategoryButton({ label, onClick, key, isSelected }) {
    const className = isSelected ? 'selected-category' : '';
    return (
        <button key={key} className={className} onClick={onClick}>
            {label}
        </button>
    );
}

export default CategoryButton;