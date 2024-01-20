import { useState } from 'react';
import './App.css';
import data, { categoriesUnique } from './data'
import CategoryButton from './CategoryButton/CategoryButton';
import Product from './Product/Product';

function App() {

  const [selectedCategories, setSelectedCategories] = useState(['All']);

  // Event handler for clicking on a category
  const handleCategoryClick = (categoryName) => {
    if (categoryName === 'All') {
      setSelectedCategories(['All']);
    } else {
      setSelectedCategories(prevCategories => {
        if (prevCategories.includes(categoryName)) {
          return prevCategories.filter(category => category !== categoryName);
        } else {
          return [...prevCategories.filter(category => category !== 'All'), categoryName];
        }
      });
    }
  };

  const filteredData = selectedCategories.includes('All') ? data : data.filter(product => selectedCategories.includes(product.category));

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
      isSelected={selectedCategories.includes(category)}
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
          isSelected={selectedCategories.includes('All')}
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