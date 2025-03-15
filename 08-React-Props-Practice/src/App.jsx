import React from 'react';
import TestimonialList from './components/TestimonialList/TestimonialList';
import testimonials from './data/testimonial.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Customer Testimonials</h1>
      <TestimonialList testimonials={testimonials} />
    </div>
  )
}

export default App
