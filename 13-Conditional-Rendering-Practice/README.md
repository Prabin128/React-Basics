<a id="readme-top"></a>     

# Question: Conditional Rendering Practice

We are building a simple authentication system in React. The system has two screens:

   **1. Login Screen** (shown when the user is registered).

   **2. Register Screen** (shown when the user is not registered).

The variable `userIsRegistered` determines which screen to show. Your task is to implement conditional rendering based on the value of `userIsRegistered`.    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#ternaryOperator)     

## Steps to Follow:

**1. Create the App Component:**

- Define a variable `userIsRegistered` inside the `App` component.

- Set its value to either `true` or `false` manually (for now).

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#ternaryOperator)     

**2. Create Two Components:**

- Create a `Login` component that displays:

    - A text input for **Username**.

    - A text input for **Password**.

    - A button with the text **"Login"**.

- Create a `Register` component that displays:

    - A text input for **Username**.

    - A text input for **Password**.

    - A text input for **Confirm Password**.

    - A button with the text **"Register"**.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#ternaryOperator)     

**3. Implement Conditional Rendering:**

- In the `App` component, use conditional rendering to display either the `Login` or `Register` component based on the value of `userIsRegistered`.

- If `userIsRegistered` is `true`, render the `Login` component.

- If `userIsRegistered` is `false`, render the `Register` component.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#ternaryOperator)    

**4. Test the Code:**

- Manually change the value of `userIsRegistered` to `true` or `false` and verify that the correct component is rendered.


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#ternaryOperator)    

## Expected Output:   


1. If `userIsRegistered = true`:

    - The `Login` component is displayed with **Username**, **Password**, and a **Login** button.  

<div align="center">
    <img src="https://github.com/Prabin128/React-Basics/blob/main/assets/ternary_login.png " width="700" >
</div>   

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/sub_section_line.png)](#ternaryOperator)     

2. If `userIsRegistered = false`:

    - The `Register` component is displayed with **Username**, **Password**, **Confirm Password**, and a **Register** button.

<div align="center">
  <img src="https://github.com/Prabin128/React-Basics/blob/main/assets/ternary_register.png " width="700" >
</div>   

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#ternaryOperator)   

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>
