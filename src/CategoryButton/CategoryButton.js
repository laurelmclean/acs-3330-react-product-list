import { useState } from 'react';
import data, {categoriesUnique } from './data';

function CategoryButton() {
    const [category, setCategory] = useState('All');

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const categoryButtonsMarkup = categoriesUnique.map((category, index) => (
        <button key={index} className="category-button" onClick={() => handleCategoryClick(category)}>
            {category}
        </button>
    ));

    console.log(category)

    const allProducts = data
        .filter((item) => item.category === category || category === 'All')
        .map((obj) => (
            <div key={obj.name}>
                <h1>{obj.name}</h1>
                <p>Description: {obj.description}</p>
                <p>Price: {obj.price}</p>
            </div>
        ));

    return (
        <>
            {categoryButtonsMarkup}
            {allProducts}
        </>
    );
}

export default CategoryButton;
