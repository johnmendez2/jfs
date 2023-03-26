import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import laptopImg from '../jfslanding.png';
import mobileImg from '../jfslanding-mobile.png';

export default function Frontpage({ products, addToCart }) {
  const history = useNavigate();

  // Determine the width of the window to determine which image and button size to use
  const isMobile = window.innerWidth < 768; // or use any other breakpoint you prefer

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        padding: 0,
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        overflow: 'hidden',
        borderRadius: '8px',
        willChange: 'transform',
      }}
    >
      <img
        src={isMobile ? mobileImg : laptopImg} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        alt="JFS Landing Page"
      />
      <div
        style={{
          position: 'absolute',
          top: isMobile ? '65%' : '70%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <Link
          to="/products"
          style={{
            display: 'inline-block',
            background: '#000000',
            color: '#fff',
            fontSize: isMobile ? '16px' : '24px',
            padding: isMobile ? '20px 30px' : '20px 40px',
            borderRadius: '4px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            transition: 'background 0.3s ease',
          }}
        >
          {isMobile ? 'Open the vault' : 'Open the vault'}
        </Link>
      </div>
    </div>
  );
}