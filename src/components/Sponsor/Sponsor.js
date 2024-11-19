import './Sponsor.css';
import React from 'react';
import Fond from '../../images/fond.png';
import Platform from '../../images/platforma.png';

function Sponsor() {
  return (
    <div className='sponsor'>
      <h2 className='sponsor__header'>Поддержка была оказана "Фондом содействия инновациям" в рамках федерального проекта "Платформа университетского технологического предпринимательства</h2>
      <div className='sponsor__container'>
        <img src={Fond} alt='' className='sponsor__image'></img>
        <img src={Platform} alt='' className='sponsor__image'></img>
      </div>
    </div>
  )
}

export default Sponsor;