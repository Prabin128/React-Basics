# Functional Components in React + TypeScript  

A functional component is still a function that returns JSX, but TypeScript allows (or enforces) typing for better safety and editor support.  

## `React.FC` vs Explicit Return Types

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
const Component = (): JSX.Element => {
  return <p>TS Component</p>;
};
```   
If we return a number or an invalid value, TypeScript will flag an error at compile time:  
```ts
const InvalidComponent = (): JSX.Element => {
  return 42; // ❌ Error: Type 'number' is not assignable to type 'JSX.Element'.
};
```  
This gives we static type safety before running the app.