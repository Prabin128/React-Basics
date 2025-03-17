//Syntax
//let result = arr.reduce(callback(accumulator, currentValue, index, array), initialValue);  

//Summing All Values in an Array

const numbers = [3, 56, 2, 48, 5,99];

const sumNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue , 0);

console.log(sumNumbers);

//Finding the Maximum Number

const maxNumber = numbers.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue: accumulator 
});
console.log(maxNumber);