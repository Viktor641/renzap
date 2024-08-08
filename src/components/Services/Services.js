import './Services.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Services() {
  const [showHoverText, setShowHoverText] = useState(false);
  const [showHoverTextContacts, setShowHoverTextContacts] = useState(false);

  const handleButtonClick = () => {
    setShowHoverText(!showHoverText);
  };

  const handleContactsButtonClick = () => {
    setShowHoverTextContacts(!showHoverTextContacts);
  };

  return (
    <div className='services'>
      <div className='services__cover'>
        <div className='services__info'>
          <div className='services__con'>
            <p className='services__text'>УСЛУГИ</p>
            {showHoverText ? (
              <button className='services__close' onClick={handleButtonClick}></button>
            ) : (
              <button className='services__button' onClick={handleButtonClick}></button>
            )}
          </div>
          {showHoverText && (
            <>
              <NavLink to={'/services'} className='services__text_aboutHover active hover'>Производство подшипников, способных работать при серьезных перекосах</NavLink>
              <NavLink to={'/services'} className='services__text_aboutHover active hover'>Производство установок, для доработки подшипников</NavLink>
            </>
          )}
          <NavLink to={'/services'} className='services__text_about hover'>Производство подшипников, способных работать при серьезных перекосах</NavLink>
          <NavLink to={'/services'} className='services__text_about hover'>Производство установок, для доработки подшипников</NavLink>
        </div>
        <div className='services__info'>
          <div className='services__con'>
            <p className='services__text'>КОНТАКТЫ</p>
            {showHoverTextContacts ? (
              <button className='services__close' onClick={handleContactsButtonClick}></button>
            ) : (
              <button className='services__button' onClick={handleContactsButtonClick}></button>
            )}
          </div>
          {showHoverTextContacts && (
            <>
              <address className='services__text_adressHover hover'>
                410080, Саратовская Область, г. Саратов, ул Им Академика О.к.антонова, д. 8, кв. 139
              </address>
              <a href="tel:+7(987)353-42-63" target="_blank" rel="noopener noreferrer" className='services__text_phoneHover hover'>+7 (987) 353-42-63</a>
              <a href="mailto:renzaprenzap@yandex.ru" target="_blank" rel="noopener noreferrer" className='services__text_mapHover hover'>renzaprenzap@yandex.ru</a>
            </>
          )}
          <address className='services__text_adress hover'>
            410080, Саратовская Область, г. Саратов, ул Им Академика О.к.антонова, д. 8, кв. 139
          </address>
          <a href="tel:+7(987)353-42-63" target="_blank" rel="noopener noreferrer" className='services__text_phone hover'>+7 (987) 353-42-63</a>
          <a href="mailto:renzaprenzap@yandex.ru" target="_blank" rel="noopener noreferrer" className='services__text_map hover'>renzaprenzap@yandex.ru</a>
        </div>
      </div>
    </div>
  );
}

export default Services;
