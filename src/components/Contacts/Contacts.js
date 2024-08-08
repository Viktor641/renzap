import './Contacts.css';
import '../Product/Product.css';
import React from 'react';

function Contacts() {
  return (
    <div className='contacts'>
      <div className='contacts__info'>
        <p className='contacts__paragraph'>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ  «РЕНЗАП» - российская научно-производственная компания </p>
        <address className='contacts__text_adress hover'>
          410080, Саратовская Область, г. Саратов, ул Им Академика О.к.антонова, д. 8, кв. 139
        </address>
        <p className='product__text_inn hover'>ОГРН 1236400011792 ИНН 6453174937 <br /> КПП 645301001</p>
        <a href="tel:+7(987)353-42-63" target="_blank" rel="noopener noreferrer" className='product__text_phone hover'>+7 (987) 353-42-63</a>
        <a href="mailto:renzaprenzap@yandex.ru" target="_blank" rel="noopener noreferrer" className='product__text_map hover'>renzaprenzap@yandex.ru</a>
      </div>
    </div>
  )
}

export default Contacts;