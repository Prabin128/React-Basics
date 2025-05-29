# 🔍 React SearchBox Component  

## ✅ Project Goal:

Create a **search input** where:

-  Users can type and search.
- The UI displays the current search term and the previous search term using useRef.

## 🔧 Step-by-Step Instructions:   

### Step 1: Setup your component

- Create a functional component, e.g., `SearchBox`.
- Import `useState`, `useRef`, and `useEffect` from React.

### Step 2: Create a state variable for the input

- Use `useState` to hold the current search term (`searchTerm`).
- Bind this state to an input field.

### Step 3: Create a ref to store the previous search term

- Use `useRef` to create a variable, e.g., `prevSearchRef`.
- Initialize it without a value (default is `undefined`).

### Step 4: Use useEffect to update the ref

- Use `useEffect` to update `prevSearchRef.current` whenever searchTerm changes.

    - This means: each time the user types and triggers a state update, update the ref with the previous value.

### Step 5: Create a search button

Add a button (e.g., “Search”) that, when clicked, sets the `searchTerm` (optional if you want to wait for button click rather than every keystroke).

### Step 6: Display current and previous search terms

Show the `searchTerm` (state) and `prevSearchRef.current` (ref) on the screen as feedback.

### Step 7: Optional - Add styling and usability

- Maybe clear the input after submitting a search.
- Add a heading, placeholder text, or instruction message to enhance the UI.

### 💡 Bonus Ideas (optional):

- Add a history list of all searched terms using an array.
- Store the previous 3 or 5 searches instead of just one using an array in the ref.