// 4. Create a `Post.jsx` component that displays a blog post. It should have:
// - An `<h2>` for the blog post title.
// - A `<p>` for the blog post content.
// - A `<small>` tag displaying the author's name and the publish date.

import "./Post.css";

function Post() {
    return (
      <div className="post-container">
        <div className="post-card">
          <h2 className="post-title">Understanding React Components</h2>
          <p className="post-content">
            React apps are made out of components, which are the building blocks of a React application.
            A component is a piece of the UI (user interface) that has its own logic and appearance.
            Technically, a component is a JavaScript function or class that optionally accepts inputs (called props)
            and returns a React element that describes how a section of the UI should appear.
            Components are independent and reusable pieces of code and return HTML.
            A component can be as small as a `button`, or as large as an `entire page`.
          </p>
          <small className="post-author">Written by Prabin Poudel | Published on Feb 28, 2025</small>
        </div>
      </div>
    );
  }
  
  export default Post;
  

