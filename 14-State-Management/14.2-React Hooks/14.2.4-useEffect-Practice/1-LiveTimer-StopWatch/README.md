# ⏱ Live Timer with useEffect

This is a simple live timer/stopwatch project built using **useEffect** hook.  

---

## Features

- The timer starts counting only when the user clicks the **Start** button.

- While running, it adds `1` every second using setInterval.

- If the user clicks **Stop**, the timer pauses (we stop the interval).

- If the user clicks **Reset**, the timer goes back to `0` and stops running.

- When the component re-renders or unmounts, we **clear the interval** (important to prevent bugs or memory leaks).


The concept is in:

- Using `useState` to track the time and running state
- Using `useEffect` to start/stop the timer based on `isRunning`
---

## React Concepts Used

- `useState` — to manage the timer and start/stop state
- `useEffect` — to start and clean up a timer interval
- `setInterval` and `clearInterval` — for updating time every second

---