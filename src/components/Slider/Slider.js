import './Slider.css';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SlideOne from '../../images/slideOne.jpg';
import SlideTwo from '../../images/SlideTwo.png';
import SlideThree from '../../images/slideThree2.png';

function Slider() {
  const slides = [
    {
      text: 'Производство подшипников, способных работать при серьезных перекосах',
      navigationText: 'Узнать подробнее',
      image: SlideOne,
      className: 'slider__one',
    },
    {
      text: 'Производство установок, для доработки подшипников',
      navigationText: 'Больше о нас',
      image: SlideTwo,
      className: 'slider__two',
    },
    {
      text: 'Сфера иновационных технологий',
      navigationText: 'Узнать подробнее',
      image: SlideThree,
      className: 'slider__three',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='slider'>
      {slides.map((slide, index) => (
        <div key={index} className={index === currentSlide ? slide.className : `${slide.className} hidden`}>
          <h2 className={`${slide.className}-text`}>{slide.text}</h2>
          <NavLink to={'about-us'} className={`${slide.className}-navigation`}>{slide.navigationText}</NavLink>
          <img src={slide.image} alt='' className={`${slide.className}-image`} />
        </div>
      ))}
    </div>
  );
}

export default Slider;
