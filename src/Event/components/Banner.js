import React from 'react';
import './banner.css';
function Banner() {
  return (
    <div className='banner'>
      <img src='/image/event-banner.png' alt='Event Banner' />
      <div className='banner-caption'>
        <div className='banner-title'>Pelumi</div>
      </div>
    </div>
  );
}

export default Banner;
