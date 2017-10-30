import React from 'react';
import Link from 'react-router-dom/Link';

const Navigation = () => {
  return (
    <ul>
      <li>
        <button><Link to='/'>Home</Link></button>
      </li>
      <li>
        <button><Link to='/about'>About</Link></button>
      </li>
      <li>
        <button><Link to='/contact'>Contact</Link></button>
      </li>
      <li>
        <button><Link to='/counter'>Counter</Link></button>
      </li>
    </ul>
  );
}

export default Navigation;