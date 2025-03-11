import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './TestimonialList.css';

function TestimonialList ({testimonials}){
    return (
        <div className="testimonial-list">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    title={testimonial.title}
                    quote={testimonial.quote}
                    email={testimonial.email}
                    image={testimonial.image}
                    isVerified={testimonial.isVerified}
                />
            ))}
        </div>
    )
}

export default TestimonialList;