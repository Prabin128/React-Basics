// src/data/testimonials.js
import  image1 from '../assets/boy.jpg' ;
import image2 from '../assets/girl.jpg';
import image3 from '../assets/man.jpg'; 

const testimonials = [
    {
        name: 'Senior Developer',
        title: 'Software Developer',
        quote: 'This practice was made by me and it covers all the concept of JSX, Components and Props',
        email: 'seniordev123@example.com',
        image: image1,
        isVerified: true,
    },
    {
        name: 'Intermediate Developer',
        title: 'Junior Software Developer',
        quote: 'Happy to assist my senior Mr. Senior Developer in this practise question!!',
        email: 'intermediatedev123@example.com',
        image: image2,
        isVerified: true,

    },
    {
        name: 'Junior Developer',
        title: 'Software Developer Intern',
        quote: 'I am so excited to learn this topic with the supervision of my senior and intermediate developer',
        email: 'interdev123@example.com',
        image: image3,
        isVerified: true,

    }
];

export default testimonials;