import './App.css';
import data, { allCategories, categoriesUnique, categoriesWithCounts } from './data'

function App() {

  return (
    <>
      {categoriesUnique.map((btn) => <button>{btn}</button>)}
    </>
  );
}

export default App;
