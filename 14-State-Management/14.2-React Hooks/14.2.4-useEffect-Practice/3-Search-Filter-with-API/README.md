# Instructions to Build the Search Filter

**1. Setup Basic States**

Create four state variables:

- One for the input value (search term)
- One to store API results
- One for loading status
- One for error handling

**2. Add an Input Field**
Create a simple input box where users can type a name to search. Connect this input to our state so it updates in real-time.  

**3. Use useEffect for Side Effects**
Set up a `useEffect` hook that triggers every time the user types something in the input field.  

**4. Limit API Calls Based on Input Length**
Inside the `useEffect`, make sure the API call only runs if the search term has ***at least 2 characters***. If it’s shorter, reset any results and errors.  

**5. Fetch Data from the API**
Use `fetch()` inside an asynchronous function to get data from a public API (like JSONPlaceholder).  

**6. Filter the Results**
Once data is fetched, filter it by matching the search term with the user names (case-insensitive).  

**7. Add a Debounce Mechanism**
Use setTimeout with a delay (e.g., 500ms) to avoid calling the API on every single keystroke. Clear the timeout on each new change.  

**8. Handle Errors and Loading**
Make sure to show a loading message while the data is being fetched, and display any error if the API call fails.   

**9. Display Results Conditionally**
Show:

- The list of filtered users if results exist
- A “No results found” message if there are no matches
- Nothing initially (when input is empty or too short)

### ✅ What We Learn from This Project

- How useEffect works and how to control when it runs
- How to work with asynchronous data in React
- How to debounce API calls for better performance
- Conditional rendering based on various states (loading, error, results)