import './App.css';
import data, { allCategories, categoriesUnique, categoriesWithCounts } from './data'

function App() {

  const categoryButtonsMarkup = categoriesUnique.map((btn) => <button>{btn}</button>)
  const allProducts = data.map((obj) => <div>      
    <h1>{obj.name}</h1>
    <p>{obj.name}</p>
    <p>{obj.price}</p></div>);

  return (
    <>
      {categoryButtonsMarkup}
      {allProducts}
    </>
  );
}

export default App;
