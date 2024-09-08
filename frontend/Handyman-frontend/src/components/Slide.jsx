import React from 'react';
import { GrItalic } from 'react-icons/gr';

export default function Slide({ post, isVisible }) {
  return (
    <div
      className="mySlides"
      style={{
        ...slideStyle,
        display: isVisible ? 'block' : 'none',
      }}
    >
      <img
        className="relative w-[850px]  h-[450px] object-cover mix-blend-multiply "
        src={post.img}
        alt="Slide"
      />
      <h2 style={headingStyle}>{post.heading}</h2>
      <p style={paragraphStyle}>{post.text}</p>
    </div>
  );
  
}

const slideStyle = {
  display: 'none',
};

const headingStyle = {
  marginTop: '10px',
  textAlign: 'center',
  fontSize: '25px',
  color: '#000',
  fontFamily: '"Dancing Script", cursive',
  fontWeight: 'bold',
  
  
};

const paragraphStyle = {
  marginTop: '10px',
  textAlign: 'center',
  fontSize: '16px',
  color: '#333',
};