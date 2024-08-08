import './Footer.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__config'> © 2024 RENZAP. </p>
      <p className='footer__config'> Все правы защищены. </p>
      <NavLink to={'/privacy-policy'} className='footer__privacy hover'> Политика конфиденциальности. </NavLink>
    </footer>
  )
}

export default Footer;