# Functional Components in React + TypeScript  

A functional component is still a function that returns JSX, but TypeScript allows (or enforces) typing for better safety and editor support.  


### ✅ Option 1: React.FC (or React.FunctionComponent)  

**Pros:**  
- Built-in type inference for props and children
- Autocomplete support

**Cons:**  
- `children` prop is always implicitly available (not always desirable)
-Some believe it hides type complexity  

```tsx
const ComponentA: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>
```  

### ✅ Option 2: Explicit Function Declaration (Preferred in industry)  

```tsx
import type { JSX } from 'react'; 

type Props = {
  title: string
}

const ComponentB = ({ title }: Props): JSX.Element => {
  return <h1>{title}</h1>
}
```  

🧠 **Recommendation:** Use **explicit typing** for better control, especially in large codebases.`  

## Return Type Annotation  

**🔹 JavaScript:**

No return type annotations. The JavaScript engine infers the return type dynamically at runtime.  
```js
const Component = () => {
  return <p>JS Component</p>;
};
```  
Errors (like returning a non-JSX element) won’t be caught until the code runs.  

**🔹 TypeScript:**

We can (and often should) explicitly declare the return type.  
```ts
import type { JSX } from 'react';

const Component = (): JSX.Element => {
  return <p>TS Component</p>;
};
```   
If we return a number or an invalid value, TypeScript will flag an error at compile time:  
```ts
import type { JSX } from 'react';

const InvalidComponent = (): JSX.Element => {
  return 42; // ❌ Error: Type 'number' is not assignable to type 'JSX.Element'.
};
```  
This gives us static type safety before running the app.  




# `React.FC` vs Explicit Return Types(JSX.Element)  

## Option 1: Using JSX.Element as Return Type  
```tsx
const ComponentA = (): JSX.Element => {
  return <p>Hello</p>;
};
``` 
### `(): JSX.Element =< {....}`  

**🧾 Meaning:**  
We're telling TypeScript:
  ***"This function returns a JSX element."***

## Option 2: Using React.FC (React Functional Component)  

```tsx
const ComponentB: React.FC = () => {
  return <p>Hello</p>;
};
```  
### `: React.FC = () => {....}`  

**🧾 Meaning:**  
We're telling TypeScript:
  ***"This is a full React component function, and React might do some extra stuff with it."***
React.FC stands for React Functional Component.

Both `Option 1` and `Option 2` are valid and will work the same.   

### 🥊 Side-by-Side: Real World Difference  
Let’s look at how they behave in actual use:   
**1. With JSX.Element:**  
```tsx
type Props = { name: string };

const Greet = ({ name }: Props): JSX.Element => {
  return <p>Hello, {name}!</p>;
};
```  
Easy. We control everything.  

**2. With React.FC:**  
```tsx
type Props = { name: string };

const Greet: React.FC<Props> = ({ name }) => {
  return <p>Hello, {name}!</p>;
};
```  
Still works! But... there's some hidden stuff.  

### 😲 Hidden Stuff with `React.FC`   

Here’s what React.FC does **behind the scenes**:

**✅ Adds children automatically:**  
```tsx
const Card: React.FC = ({ children }) => {
  return <div>{children}</div>;
};
```  
So we don’t **need to define `children`** in props manually.

But that also means:
  - We might **accidentally use `children` when we didn't mean to**
  - It’s **harder to customize**
  - Some **defaultProps issues** (if we use them)


## What's the Difference?
   
### 🔹 1. Return Type   
| Concept       | `JSX.Element` (Option 1)        | `React.FC` (Option 2)                            |
| ------------- | ------------------------------- | ------------------------------------------------ |
| What it means | Function returns a JSX element  | Function is a React Functional Component         |
| Type safety?  | We manually say it returns JSX | React does more work for us (like props typing) |
| Required?     | No                              | No                                               |

## 🔹 2. Props Handling   

Let’s say our component needs props:   

**👇 With JSX.Element:**  
```tsx
type MyProps = { name: string };

const ComponentA = ({ name }: MyProps): JSX.Element => {
  return <p>Hello, {name}</p>;
};
```      

**👇 With React.FC:**    

```tsx
type MyProps = { name: string };

const ComponentB: React.FC<MyProps> = ({ name }) => {
  return <p>Hello, {name}</p>;
};
```       

✅ ***React.FC auto-types `children` and props for us.***
❌ But it comes with ***some quirks***, like older issues with default props, generics, and more complexity.  

### 🤔 Which Should We Use?    

**Use this (Recommended):**  
```tsx
const MyComponent = (): JSX.Element => {
  return <p>Hello</p>;
};
```  
OR, if we need props:  
```tsx
type Props = { name: string };

const MyComponent = ({ name }: Props): JSX.Element => {
  return <p>Hello, {name}</p>;
};
```  
**❌ Avoid using React.FC as a beginner:**  

It seems helpful, but can cause more confusion later, especially with `children`, default props, generics, etc.

### 👶 In Super Simple Words

- Use `(): JSX.Element` => when writing components. It's **clean**, **simple**, and **predictable**.
- `React.FC` sounds fancy, but it’s **not better**, and **React core team doesn't recommend it anymore**.