# Question    

### 1. Apply CSS styles to the `Testimonial.jsx` component   
Update the styles in the `Testimonial.jsx` component to match the appearance of the sample output. 

### 2. Extract the testimonial card as a reusable `TestimonialCard` component  
Create a separate component called `TestimonialCard` that accepts props and displays a testimonial with a name, title, and quote.  

### 3. Use props to render a default testimonial inside the `TestimonialCard`  
Set up default props for `TestimonialCard`, for example, a quote from a famous person like Albert Einstein, along with their name and title. This ensures the `TestimonialCard` component can be reused with default values.

### 4. Dynamically generate multiple testimonial cards from an array in `testimonials.js`  
- Import the `testimonials.js` file into the main component (e.g., `App.jsx`).
- The `testimonials.js` file should contain an array of objects where each object has the testimonial content (e.g., `name`, `title`, `image`, `quote`, `email`).
- Use `.map()` inside the main component to loop over the array and render multiple `TestimonialCard` components, passing each testimonial's data as props.

### 5. Add Prop-Types for the `TestimonialCard` component  
To improve type-checking, add `PropTypes` to  `TestimonialCard` component. Define the expected types for `name`,`image`, `title`, `quote`, and `email`.

### 6. Add conditional rendering to display an optional `email` or `contact info`   
If the testimonial object contains an email or contact info, display it below the name or title in the `TestimonialCard`. If the email is not provided, render a default text like `"No contact information available."`

### 7. Use JSX to style the TestimonialCard component dynamically  
Use conditional JSX styling (e.g., `className`) to change the appearance of the `TestimonialCard` based on certain props. For example, if the testimonial is from a "Verified User," you can highlight the card by adding a special class. 

### 8. Create a `TestimonialList` component  
Create a new `TestimonialList` component that will be responsible for rendering the entire list of testimonials. Pass the array of testimonials from `testimonials.js` to `TestimonialList` as a prop, and have it map over the array to display each `TestimonialCard`.

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#Prop)  

# Output    

[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/prop_practice.png)](#JSX)   


[![-----------------------------------------------------](https://github.com/Prabin128/React-Basics/blob/main/assets/line.png)](#Prop)  

