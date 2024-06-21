import './Projects.css';
import '../Product/Product.css';
import React from 'react';
import Stanok from '../../images/productImageTwo.jpg';
import Transformed from '../../images/ystanovka.png';

function Projects() {
  return (
    <div className='product'>
      <div className='product__container'>
        <img src={Stanok} alt='' className='product__image'></img>
        <div className='product__info'>
          <p className='product__paragraph'>Подшипник с вогнутой образующей роликов, обеспечивающей повышенные эксплуатационные свойства.</p>
        </div>
      </div>
      <div className='product__container'>
        <div className='product__info'>
          <p className='product__paragraph'>Установка для доработки подшипников</p>
        </div>
        <img src={Transformed} alt='' className='product__image'></img>
      </div>
    </div>
  )
}

export default Projects;