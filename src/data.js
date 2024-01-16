import data from './data.json';

const allCategories = data.map(obj => obj.category);

// Make a set from an array 
// all values of the set are unique
const categorieSet = new Set(allCategories)
const categoriesUnique = Array.from(categorieSet)

console.log(categoriesUnique);

export default data;