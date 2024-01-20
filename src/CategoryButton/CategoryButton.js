import React from 'react';
import './CategoryButtons.css'

function CategoryButton({ label, onClick, key, isSelected, count }) {
    const className = isSelected ? 'selected-category' : '';
    return (
        <button key={key} className={className} onClick={onClick}>
            {label}
            {count}
        </button>
    );
}

export default CategoryButton;