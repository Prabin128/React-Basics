# Simple Video Player Project using useRef and useState

## ✅ Goal:

Create a video player with one button that toggles between **Play** and **Pause**, using `useRef` and `useState`.

## 🔧 Step-by-Step Instructions:  

**1. Create a new React component**

- Name it something like `VideoPlayer.jsx`.
- Define a functional component inside it.  

**2. Add a <video> element**

- Inside your component’s return statement, include a `<video>` tag.
- Provide a `src` attribute with a sample video(Use any public video file (or import one locally) as the source).
- Assign it a width/height or styling so it's clearly visible.
- Make sure to add the `ref` attribute, which will connect it to your `useRef`.

**3. Create the useRef**

- Use the `useRef` hook to create a reference variable.
- Attach it to the `<video>` element.

**4. Create a `useState`**

- Add a `useState` hook to track whether the video is playing.
- For example: `isPlaying` (boolean).

**5. Create the toggle function**

- Write one function called handleToggle.
- In this function:

    - Use the ref to check the current video state (using isPlaying).

    - If not playing:
        - Call `.play()` on the video element via the ref.
        - Update state to `true`.

    - If already playing:
        - Call `.pause()` on the video element.
        - Update state to `false`.

**6. Add a single button**

- Use one `<button>` element.
- The `onClick` handler should be `handleToggle`.
- The button’s text should change based on `isPlaying`:
    - If `true` → display `"Pause"`
    - If `false` → display `"Play"`

**7. Test the behavior**

- Open your app.
- Initially, the button should show "Play".
- Click it → the video starts, button changes to "Pause".
- Click again → the video pauses, button changes to "Play".

**8. (Optional) Improve UX**
- Add styles to make the button look interactive.
- Disable the button until the video is fully loaded (bonus challenge).
- Add an `onEnded` handler to reset state when video finishes.