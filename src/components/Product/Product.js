import './Product.css';
import React from 'react';
import ImagePodshipnikov from '../../images/productImageOne.jpg';
import ImageYstanovok from '../../images/podshipnik.jpg';

function Product() {
  return (
    <div className='product'>
      <div className='product__container'>
        <img src={ImagePodshipnikov} alt='' className='product__image'></img>
        <div className='product__info'>
          <p className='product__paragraph'>Производство подшипников, способных работать при серьезных перекосах </p>
          <button className='product__button hover'>Оставить заявку
            <div className='product__menu'>
              <a href="tel:+7(987)353-42-63" target="_blank" rel="noopener noreferrer" className='product__text_phone hover'>+7 (987) 353-42-63</a>
              <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer" className='product__text_map hover'>example@example.com</a>
            </div>
          </button>
        </div>
      </div>
      <div className='product__container'>
        <div className='product__info'>
          <p className='product__paragraph'>Производство установок, для доработки подшипников</p>
          <button className='product__button hover'>Оставить заявку
            <div className='product__menu'>
              <a href="tel:+7(987)353-42-63" target="_blank" rel="noopener noreferrer" className='product__text_phone hover'>+7 (987) 353-42-63</a>
              <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer" className='product__text_map hover'>example@example.com</a>
            </div>
          </button>
        </div>
        <img src={ImageYstanovok} alt='' className='product__image'></img>
      </div>
    </div>
  )
}

export default Product;