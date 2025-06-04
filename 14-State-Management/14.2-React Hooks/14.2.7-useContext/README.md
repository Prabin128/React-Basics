# What is useContext in React?

- useContext is a **React Hook** that lets **functional components** use **React Context**.

To say it simply:

- 🔹 useContext helps our component **get values from a central place (context)**, instead of passing them **manually as props** from parent to child, and so on.  

# 🔍 What is Context in React (Basic Idea)?
Think of **Context** like a **global storage** — a shared place where you keep some data that **many components** might need (e.g., theme, language, logged-in user info).

**✅ Example (Before Context):**
```jsx
<App theme="dark" />
```
Inside `<App>` we pass the theme to `<Header>`, `<Header>` passes to `<Navbar>`, then to `<Button>`... and so on. This is called **prop drilling.**

Too much hassle.

**✅ Example (With Context + useContext):**
Create a context to store `theme = dark`, then ANY component can directly read it. No need to pass it step-by-step!

# 🧭 Why Use useContext? (in detail)  

## 🚫 Problem:
Without context, we might pass data through many components even if only the bottom one needs it.