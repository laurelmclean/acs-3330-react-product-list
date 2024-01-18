import { useState } from 'react';
import './App.css';
import data, { categoriesUnique } from './data'
import CategoryButton from './CategoryButton/CategoryButton';
import Product from './Product/Product';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredData = selectedCategory === 'All' ? data : data.filter(product => product.category === selectedCategory);

  const buttonMarkup = categoriesUnique.map((category, index) => (
    <CategoryButton 
      key={index} 
      label={category}
      onClick={() => handleCategoryClick(category)} />
  ));

  const productMarkup = filteredData.map((product) => (
    <Product product={product} />
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