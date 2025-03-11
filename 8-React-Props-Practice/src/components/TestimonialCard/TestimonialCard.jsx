import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialCard.css';

function TestimonialCard({name, title, quote, email, image, isVerified}){
    return(
        <div className={`testimonial-card ${isVerified ? 'verified' : ''}`}>

            <div className="user-image">
                <img src= {image} alt= {name} />
            </div>

            <p className='quote'>{quote}</p>

            <div className="user-info">
                <h3 className='name'>{name}</h3>
                <p className='title'>{title}</p>
                {email? (<p className='email'>Contact: {email}</p>) : (<p className='Email'>No contact information available</p>)}
            </div>

        </div>
    )
}


TestimonialCard.propTypes = {
    name: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    quote: PropTypes.string.isRequired, 
    email: PropTypes.string, 
    image: PropTypes.string.isRequired, 
    isVerified: PropTypes.bool,
}

TestimonialCard.defaultProps = {
    name: 'Mr. Developer',
    title: 'React Props Practice',
    quote: 'Quote of the day is I learnt the Props  in React',
    email: '',
    image: 'images to be rendered', // Default placeholder image
    isVerified: false,
}

export default TestimonialCard;