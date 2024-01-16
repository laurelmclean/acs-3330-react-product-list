import data from './data.json';

const allCategories = data.map(obj => obj.category);

// Make a set from an array 
// all values of the set are unique
const categorieSet = new Set(allCategories)
const categoriesUnique = Array.from(categorieSet)

// histogram where keys are names of the categories
// and values are number of times it appears
const categoriesWithCounts = data.reduce((obj, item) => {
    const category = item.category;

    // Check if the category key exists in the object
    // If it doesn't, initialize it with a count of 1
    // If it does, increment the count
    if (!obj[category]) {
        obj[category] = 1;
    } else {
        obj[category] += 1;
    }
    return obj;
}, {});

console.log(categoriesWithCounts);

export default data;