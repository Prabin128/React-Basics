//Syntax
//let newArray = arr.map(callback(currentValue, index, array), thisArg)  

//Doubling the values in an existing Array

const singleNumbers = [2,5,8,0];

const doubledNumbers = singleNumbers.map((item) => item*2);   

console.log(doubledNumbers);


//  Creating a New Array of Object Properties

const emojipedia = [
    { emoji: "😊", meaning: "A smiling face" },
    { emoji: "😂", meaning: "A laughing face" },
    { emoji: "😎", meaning: "A cool face" },
  ];

const  meanings = emojipedia.map(item => item.meaning);

console.log(meanings);