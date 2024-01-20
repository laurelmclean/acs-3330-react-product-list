import React from 'react';
import './CategoryButtons.css'

function CategoryButton({ label, onClick, key, isSelected, count }) {
    const className = `${isSelected ? 'selected-category' : ''}`;
    return (
        <button key={key} className={className} onClick={onClick}>
            {label} {<span className="count-badge">{count}</span>}
        </button>
    );
}

export default CategoryButton;