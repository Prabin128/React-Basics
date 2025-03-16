# Practice Question: Mapping Data to Components (Bookstore Inventory)  

- In this challenge, we will be creating an online bookstore inventory using React. 
- Our goal is to create a dynamic bookstore website that lists books with their titles, authors, and descriptions.  
- By the end of this challenge, we should be able to use React to dynamically display the list of books using mapped components and utilize props to pass data.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools)  

## Problem Overview:  

We will create a simple **bookstore website** that dynamically displays a list of books.   

Each book will have:

- A `title` (string)
- An `author` (string)
- A `description` (string)
- A unique `ID` for each book.  

Our task is to split this functionality into multiple components and use the `map` function to render each book dynamically. The steps below will guide through the process of breaking down the problem.


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools)  

## Step-by-Step Breakdown:  

**Step 1: Create the Book Component**  

Create a new component called `Book.jsx`.   
This component will be responsible for displaying the details of a single book (`title`, `author`, and `description`).   
It should accept props for the book title, author, and description, and render them accordingly.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

**Step 2: Create the Books Array**  

Create a constant array **bookstore** inside `Bookstore.js` that holds a list of book objects.   

Each book object should have the following properties:

- `id` (unique identifier)
- `title` (string)
- `author` (string)
- `description` (string)  

Make sure this array has at least 5 book objects.  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)    

**Step 3: Pass Data to the Book Component**  

Inside `App.js`, import the Book component.   
Map through the `bookstore` array and render a Book component for each item.   
We need to pass the `title`, aut`hor, and `description` as **props** to each `Book` component.   

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)    


**Step 4: Use the Map Function**  

Instead of manually creating `Book` components for each book, use the map function to loop over the `bookstore` array and generate the necessary components dynamically. Don’t forget to provide a `key` prop for each item in the array.    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#devtools)  

**Step 5: Style the Components (Optional)** 

We may add some basic CSS to style the list of books to make it look like a bookstore inventory (this step is optional but encouraged).  

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools)

**Expected Outcome:**  

- The final webpage will render a list of books, each with a `title`, `author`, and `description`.
- The data for the books should be passed dynamically using props.
- The components should be reusable and should work for any number of books in the `bookstore` array.
- **If a new book is added to the bookstore array, it should automatically be displayed on the app without needing any additional changes to the JSX code**. This is made possible by the dynamic mapping of data.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#devtools) 