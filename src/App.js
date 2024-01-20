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

  const totalSum = data.reduce((sum, item) => {
    const price = parseFloat(item.price.slice(1));
    return sum + price;
  }, 0)

  const selectedSum = filteredData.reduce((sum, item) => {
    const price = parseFloat(item.price.slice(1));
    return sum + price;
  }, 0);

  const productsPerCategory = data.reduce((counts, product) => {
    const category = product.category;
    counts[category] = (counts[category] || 0) + 1;
    return counts;
  }, {});
  
  const buttonMarkup = categoriesUnique.map((category, index) => (
    <CategoryButton 
      key={index} 
      label={category}
      onClick={() => handleCategoryClick(category)}
      isSelected={selectedCategory.includes(category.name)}
      count={productsPerCategory[category]} />
  ));

  const productMarkup = filteredData.map((product) => (
    <Product product={product} />
  ));


  return (
    <div className="App">
      <div className='CategoryList'>
        <CategoryButton
          label="All"
          onClick={() => handleCategoryClick('All')}
          isSelected={selectedCategory.includes('All')}
          count={data.length}
        />
        {buttonMarkup}
        </div>
        <h1>Total Sum of All Products: ${totalSum.toFixed(2)}</h1>
      <h1>Total Sum of Selected Products: ${selectedSum.toFixed(2)}</h1>
        <div className='ProductList'>
          {productMarkup}
        </div>
    </div>
  );
}

export default App;