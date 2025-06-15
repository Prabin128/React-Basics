# 📝 Todo List using useReducer in React

This project demonstrates how to build a simple and powerful Todo List using React's `useReducer` hook.

---

## ✅ Step 1: Set Up the Project

- Use `create-react-app` or `Vite` to scaffold a React project.
- Name the folder: `Todo-List-Manager`.
- Clean up the boilerplate (remove `App.css`, logo, etc.).
- Create a main component: `App.js`.

---

## ✅ Step 2: Define the Todo Structure

Each todo will be an object like:

```js
{
  id: unique id (use Date.now() or uuid),
  text: 'Learn useReducer',
  completed: false
}
```
## ✅ Step 3: Create the Reducer Function

- Create a file called `todoReducer.js`.
- Define a reducer that supports:
  - `'ADD_TODO'` – Add a new todo.
  - `'TOGGLE_TODO'` – Toggle completion.
  - `'DELETE_TODO'` – Remove a todo.
  - `'UPDATE_TODO'` – *(optional but useful)* Edit an existing todo.
- 🔁 Always return a new array (immutability).

---

## ✅ Step 4: Set Up `useReducer` in `App.jsx`

- Import your reducer and use it with `useReducer`.
- Initialize the state with an empty array: `[]`.

```jsx
const [todos, dispatch] = useReducer(todoReducer, []);
```
---  

## ✅ Step 5: Break Into Components

Create the following components inside a `/components` folder:

### `TodoForm.jsx`

- Input field + Submit button.
- On submit, dispatch `'ADD_TODO'`.

### `TodoList.js`

- Renders the full list of todos using `TodoItem`.

### `TodoItem.jsx`

- Displays a single todo item with:
  - A checkbox to toggle completed.
  - The text (with strike-through if completed).
  - A delete button 🗑️.
  - An optional edit button ✏️.

> Pass necessary props and `dispatch` to each component.

---

## ✅ Step 6: Handle All Actions with `dispatch`

- **Add Todo**: On form submit → dispatch `'ADD_TODO'` with text.
- **Toggle Todo**: On checkbox click → dispatch `'TOGGLE_TODO'` with id.
- **Delete Todo**: On delete click → dispatch `'DELETE_TODO'` with id.
- **Update Todo** *(Optional)*: On edit submit → dispatch `'UPDATE_TODO'` with updated text and id.

---

## ✅ Step 7: Add Input Validation

- Prevent adding empty todos.
- Auto-clear input after adding a task.
- Optional: Show an alert or warning if input is empty.

---

## ✅ Step 8: Style the App *(Optional but Recommended)*

- Use basic CSS or TailwindCSS.

Apply:
- Strike-through for completed tasks.
- Light/dark mode toggle *(bonus)*.

---

## ✅ Step 9: Enhance UX *(Optional)*

- Allow editing a todo inline.
- Auto-focus input when editing.
- Add filter buttons: **All** | **Active** | **Completed**.

---

## ✅ Step 10: Test All Functionalities

- Add → Toggle → Edit → Delete.
- Check reducer is **not mutating state**.
- Log current state using `console.log(todos)` for debugging.

---


