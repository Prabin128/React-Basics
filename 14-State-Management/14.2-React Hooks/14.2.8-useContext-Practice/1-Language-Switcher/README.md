# Language Switcher  

## Step-by-Step Instructions: Language Switcher with useContext  

**1. Project Setup**
- Set up a new React project (e.g., using Create React App or Vite).
- Organize the folder structure. A good one might include:
    - `/components`
    - `/context`
    - `/translations` (optional)

**2. Create Translation Data**   
- Define a `translations` object somewhere accessible (can be in a separate file).
- This object maps language codes (e.g., `en`, `np`) to their respective text.

**3. Create Language Context**  
- Inside a new file (e.g., `LanguageContext.jsx`):
- Create a context using `React.createContext()`.
- Create a provider component that:
    - Holds a `language` state.
    - Holds a `setLanguage` function.
    - Provides both `language` and `setLanguage` to children.

**4. Wrap the App with the Context Provider**
- In our `App.js`:
    - Wrap the entire app (or the relevant components) with the LanguageContext.Provider.

**5. Create a Language Selector Component**  
- Build a dropdown or set of buttons that allow the user to switch between languages.
- Use `useContext(LanguageContext)` to:
    - Access the `setLanguage` function.
    - Trigger the language change on user input.

**6. Build Translatable Components (Home, About, Footer)**  

- Inside each component:
    - Use `useContext(LanguageContext)` to access the current `language`.
    - Use that value to get the correct text from the `translations` object.
    - Render the translated text dynamically based on the current language.

**7. Test Switching Functionality**  
- Ensure that when you select a different language from the LanguageSelector:
    - The text updates across all components instantly (thanks to context).
    - No page reload is needed.


**🧠 Concepts Reinforced**
- Sharing global state with Context.
- Passing down both data (`language`) and functions (`setLanguage`) via Context.
- Rendering UI based on state from Context.
- Decoupling language logic from UI components.