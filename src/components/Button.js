import React from 'react';
import './button.css';

function Button({ title, variation, style }) {
  return (
    <>
      <button style={style} className={`${variation}-btn btn-style`}>
        {title}
      </button>
    </>
  );
}

export default Button;
