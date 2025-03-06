import './Sponsor.css';
import React from 'react';
import Fond from '../../images/fond.png';
import Platform from '../../images/platforma.png';

function Sponsor() {
  return (
    <div className='sponsor'>
      <p className='sponsor__header'>Проект создан при поддержке Федерального государственного бюджетного учреждения "Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства."</p>
      <div className='sponsor__container'>
        <img src={Fond} alt='' className='sponsor__image'></img>
        <img src={Platform} alt='' className='sponsor__image'></img>
      </div>
    </div>
  )
}

export default Sponsor;