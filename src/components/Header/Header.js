import './Header.css';
import React, { useState, useEffect } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import VideoBackground from '../../images/MainImage.jpg';
import Navigator from '../../images/charm--arrow-right.svg';
import Menu from '../../images/typcn--th-menu.svg';
import Close from '../../images/close.svg';

function Header(props) {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);
  const [color, setColor] = useState(props.color);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setColor('white');
      } else {
        setColor(props.color);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [props.color]);

  return (
    <header style={{ height: `${props.height}` }} className='header'>
      {location.pathname === '/' && (
        <>
          <div className='video-container'>
            <img src={VideoBackground} alt='' className='background-video'></img>
          </div>
          <div className='header__description'>
            <p className='header__about'>Сфера инновационных технологий</p>
          </div>
          <NavLink to={'/about-us'}>
            <img src={Navigator} alt='навигация на страницу о нас' className='header__about_link' />
          </NavLink>
        </>
      )}
      <div className='header__content'>
        <a href="tel:+7(987)353-42-63" target="_blank" rel="noopener noreferrer" className='header__phone'></a>
        <Link to={'/'}>
          <img className='header__icon' src={Logo} alt='логотип проекта' onClick={closeMenu}></img>
        </Link>
        <div className='header__container'>
          <nav className={`header__navigation ${menuActive ? 'active' : ''}`}>
            <ul className='header__list'>
              <li className='header__list_popup'>
                <NavLink to={'/about-us'} style={{ color: color }} className='header__list_info' onClick={closeMenu}>О компании</NavLink>
              </li>
              <li className='header__list_popup'>
                <NavLink to={'/services'} style={{ color: color }} className='header__list_info' onClick={closeMenu}>Услуги</NavLink>
              </li>
              <li className='header__list_popup'>
                <NavLink to={'/projects'} style={{ color: color }} className='header__list_info' onClick={closeMenu}>Проекты</NavLink>
              </li>
              <li className='header__list_popup'>
                <NavLink to={'/contacts'} style={{ color: color }} className='header__list_info' onClick={closeMenu}>Контакты</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <img
          src={Menu}
          alt='menu'
          className={`header__menu ${menuActive ? 'hidden' : ''}`}
          onClick={toggleMenu}
        />
        <img
          src={Close}
          alt='close'
          className={`header__close ${menuActive ? '' : 'hidden'}`}
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
}

export default Header;

