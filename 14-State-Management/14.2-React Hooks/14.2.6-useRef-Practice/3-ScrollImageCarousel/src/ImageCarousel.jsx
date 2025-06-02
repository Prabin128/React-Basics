import { useState, useRef} from 'react'
import './ImageCarousel.css'
import Slide1 from './assets/Slide1.jpg' 
import Slide2 from './assets/Slide2.jpg'  
import Slide3 from './assets/Slide3.jpg'  


const images = [Slide1, Slide2, Slide3]

function ImageCarousel() {

  const carouselRef = useRef(null);  // reference to the DOM element (div) that contains all the images
  const currentIndexRef = useRef(0);  //to track of which image you're on (0, 1, or 2).

  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    if (!container) return;

    const imageWidth = container.children[0].offsetWidth;  //Measure how wide the first image is (assuming all are same width).
    container.scrollTo({
      left: imageWidth * index,  //Multiply imageWidth by index (e.g., 0 for first image, 1 for second).
      behavior: 'smooth',
    });
  };
  
  const handleNext = () => {
    if (currentIndexRef.current < images.length - 1) {
      currentIndexRef.current += 1; //at first the currentIndexOf.current is 0, after we click Next, it is incremented to 1 and so on 
      scrollToIndex(currentIndexRef.current);  //Hence, scrollToIndex(1)
    }
  };

  const handlePrev = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current -= 1;
      scrollToIndex(currentIndexRef.current);
    }
  };

  return (
    <div className='carousel-wrapper'>
      <button className="nav-button" onClick={handlePrev} >Prev</button>
      <div className="carousel-container" ref={carouselRef}>
        {
          images.map((data,index)=>(
            <img 
              key={index} 
              src= {data} 
              alt={`Slide ${index +1}`}
              className="carousel-image" 
            />
          ))
        }

      </div>
      <button className="nav-button" onClick={handleNext}>Next</button>

    </div>
  )
}

export default ImageCarousel
