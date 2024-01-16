import { useState } from 'react';
import './App.css';
import data, { categoriesUnique } from './data'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredData = selectedCategory === 'All' ? data : data.filter(product => product.category === selectedCategory);

  const buttonMarkup = categoriesUnique.map((category, index) => (
    <button key={index} className="category-button" onClick={() => handleCategoryClick(category)}>
      {category}
    </button>
  ));

  const productMarkup = filteredData.map((product) => (
    <div key={product.id} className="product">
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>{product.price}</p>
    </div>
  ));

  return (
    <div className="App">
        {buttonMarkup}
        <div>
          {productMarkup}
        </div>
    </div>
  );
}

export default App;