# JavaScript ES6: `map`, `filter`, and `reduce` Functions   

- JavaScript provides powerful array manipulation methods such as `map`, `filter`, and `reduce`.  
- These methods allow to transform, filter, and aggregate data efficiently, making our code cleaner and more expressive.  
- These methods are part of ***ES6 (ECMAScript 2015)*** and are widely used to manipulate and transform arrays in a functional style.  
-Let's dive into each of these methods with their syntax, use cases, and examples.  

## 1. map() Method  

- The map method is used to iterate over an array and create a new array by applying a function to each item.  
- It transforms each element of the array according to the logic we provide and returns a new array with the results.  
- It does not modify the original array, but returns a new one.  

**Syntax**   

```js 
let newArray = arr.map(callback(currentValue, index, array), thisArg);
```  
**Parameters:**  

**1. callback (Required)**: A function that gets called for each element in the array. This function takes the following arguments:

- ***currentValue (Required)***: The current element being processed in the array.
- ***index (Optional)***: The index of the current element being processed.
- ***array (Optional)***: The array that `map()` is called upon.

**2. thisArg (Optional)**: A value to use as `this` when executing the callback function.  

**Return Value:**  

A new array with the results of applying the callback function to each element in the array.  

**Example 1: Doubling the Values in an Array**  

```javascript
const numbers = [3, 56, 2, 48, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);  // [6, 112, 4, 96, 10]
```  

In this example, the `map` method takes each number in the `numbers` array, multiplies it by 2, and returns a new array with the doubled values.  

**Example 2: Creating a New Array of Object Properties**  

Imagine we have an array of objects and we want to extract a specific property from each object:

```js
const emojipedia = [
  { emoji: "😊", meaning: "A smiling face" },
  { emoji: "😂", meaning: "A laughing face" },
  { emoji: "😎", meaning: "A cool face" },
];

const meanings = emojipedia.map(entry => entry.meaning);

console.log(meanings);
// ["A smiling face", "A laughing face", "A cool face"]  
```  

Here, `map` is used to extract just the meaning from each object in the `emojipedia` array.

**Notes:**
- The original array is not modified.
- If the callback function returns undefined for any element, that element will still be included in the new array, but it will be `undefined`.  


## 2. filter() Method  

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

**Syntax:**  

```js
let newArray = arr.filter(callback(currentValue, index, array), thisArg);
```
**Parameters:**  

**1. callback (Required)**: A function that tests each element of the array. It accepts the following arguments:

- ***currentValue (Required)***: The current element being processed in the array.
- ***index (Optional)***: The index of the current element being processed.
- ***array (Optional)***: The array that filter() is called upon.  

**2. thisArg (Optional)**: A value to use as this when executing the callback function.

**Return Value:**  

A new array with all the elements for which the callback function returned a truthy value.   
If no elements pass the test, an empty array is returned.  

**Example 1: Filtering Numbers Greater Than 10**
```js  
const numbers = [3, 56, 2, 48, 5];

const numbersGreaterThan10 = numbers.filter(num => num > 10);

console.log(numbersGreaterThan10);  // [56, 48]

```  
In this example, filter is used to create a new array that only contains numbers greater than 10.  

**Example 2: Filtering Odd Numbers**   

```js
const numbers = [3, 56, 2, 48, 5];

const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers);  // [3, 5]

```  
Here, filter is used to return only the odd numbers from the numbers array.  


**Notes:**
- The original array is not modified.
- The filter() method always returns a new array, even if no elements pass the test.  


## 3. reduce() Method

- The `reduce() `method executes a reducer function (that we provide) on each element of the array (from left to right) to reduce it to a single value(like a sum, product, etc.).  
- This method is great for aggregation tasks, such as summing up values or accumulating data into an object.

**Syntax:** 

```js
let result = arr.reduce(callback(accumulator, currentValue, index, array), initialValue);  
```

**Parameters:**  

**1. callback (Required)**: A function that is called on each element in the array. It takes four arguments:  

- **accumulator (Required)**: The accumulated value returned in the previous iteration. On the first iteration, it is set to the initialValue (if provided), or the first element of the array if no initialValue is provided.  
- **currentValue (Required)**: The current element being processed.
- **index (Optional)**: The index of the current element being processed.
- **array (Optional)**: The array that `reduce()` is called upon.

**2. initialValue (Optional)**: A value to initialize the accumulator. If not provided, the first element of the array will be used as the `accumulator`, and the iteration will start from the second element.

**Return Value:**  

A single value that is the result of accumulating the results of the callback function across the array.  

**Example 1: Summing All Values in an Array**

```javascript
const numbers = [3, 56, 2, 48, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);  // 114

```  
In this example, `reduce` is used to sum all the numbers in the array. The `accumulator` starts at 0, and then each value is added to it.  

**Example 2: Finding the Maximum Number**  

```js
const numbers = [3, 56, 2, 48, 5];

const max = numbers.reduce((accumulator, currentValue) => {
  return currentValue > accumulator ? currentValue : accumulator;
}, numbers[0]);

console.log(max);  // 56
```  

Here, `reduce` is used to find the maximum number in the array by comparing each value with the current maximum value.

**Notes:**  

- If no `initialValue` is provided, the first element of the array is used as the initial accumulator value, and iteration starts at index 1.
- The `reduce()` method can also be used to perform more complex reductions, such as finding the maximum or minimum value, flattening arrays, etc.   


# Comparison of map, filter, and reduce

| Method  | Purpose                                         | Return Value                        | Example Use Case                                                      |
|---------|-------------------------------------------------|-------------------------------------|----------------------------------------------------------------------|
| `map`   | Transforms each element in an array into a new value | New array with transformed items    | Doubling numbers in an array, extracting properties from objects      |
| `filter`| Filters out elements that don't meet a condition | New array with items that pass the test | Filtering numbers greater than 10, extracting active users from an array of users |
| `reduce`| Reduces the array to a single value            | Single value (sum, product, etc.)   | Summing an array of numbers, counting items in an array, finding max/min values |


## Key Differences:
- **map**: Applies a function to every item and returns a new array of the same size with transformed elements.
- **filter**: Returns a new array that only includes elements that satisfy a given condition.
- **reduce**: Aggregates all elements into a single value, making it useful for operations like summing, averaging, or finding the max/min.  


#  Additional Functional Array Methods (ES6+)  

## 4. forEach() Method   

The `forEach()` method executes a provided function once for each array element.  

**Syntax:**
```js
arr.forEach(callback(currentValue, index, array), thisArg);
```
**Notes:** Unlike `map()`, `forEach()` doesn’t return anything and is generally used for side-effects.  

**Example:**
```js
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));
```  

## 5. find() Method  

The `find()` method returns the first element in the array that satisfies the provided testing function.  

**Syntax:**  

```js
let result = arr.find(callback(currentValue, index, array), thisArg);
```  

**Example:** 

```js
const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2
```  

## 6. some() and every() Methods  

- `some()` checks if at least one element in the array passes the test.
- `every()` checks if all elements in the array pass the test.  

Syntax:
```js
arr.some(callback(currentValue, index, array));
arr.every(callback(currentValue, index, array)); 
```  

**Example:**  

```js
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0); // true
const allEven = numbers.every(num => num % 2 === 0); // false  
```  

## 7. flatMap() Method  

The flatMap() method first maps each element using a mapping function, then flattens the result into a new array.  

**Syntax:**  

```js
let newArray = arr.flatMap(callback(currentValue, index, array), thisArg);  
```  

**Example:**  

```js
const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.flatMap(arr => arr);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]  
```  

# Conclusion:  

- These array methods—`map()`, `filter()`, and `reduce()`—along with other functional array operations like `forEach()`, `some()`, and `find()`, are key tools in JavaScript for functional programming.   
- They allow us to perform complex operations on arrays in a clean, concise, and readable manner.   
- Each method has its specific use case, and understanding when and how to use them is crucial to writing efficient JavaScript code.