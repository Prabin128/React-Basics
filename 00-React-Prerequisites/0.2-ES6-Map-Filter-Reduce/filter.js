//Syntax
//let newArray = arr.filter(callback(currentValue, index, array), thisArg);



// Filtering Numbers Greater Than 10
const numbers = [3, 56, 2, 48, 5];

const greaterThanTen = numbers.filter(num => num > 10);
console.log(greaterThanTen);


//Filtering Odd Numbers  

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);