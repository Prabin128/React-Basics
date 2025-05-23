## 🔧 Step-by-Step Instructions

**1. Initialize Theme State**
Use the `useState` hook to create a state variable for storing the current theme (`'light'` or `'dark'`).

**2. Implement Theme Toggle Function**
Create a function to toggle the theme between 'light' and 'dark'.

**3. Apply Theme Effects Using useEffect**
Use the `useEffect` hook to update the DOM when the theme changes. Specifically:

- Change the `document.body.style.backgroundColor` based on the current theme.
- Update the `document.title` to reflect the active theme.

## Concepts Used

- `useState` for tracking the current theme
- `useEffect` for applying DOM changes when theme changes