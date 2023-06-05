import React from 'react'

import Media from '../elements/Media';

import Visa from '../../images/icons/cards/visa.svg';
import Mastercard from '../../images/icons/cards/mastercard.svg';
import Liqpay from '../../images/icons/cards/liqpay.svg';

import ArrowRight from '../../images/icons/rightArrow.png';

import Mother from '../../images/footer-image/young-mother-playing-with-her-little-baby-bed.png';

export const Footer = () => {
  return (
    <footer className="footer">
    <div className="block-with-email">
      <div className='container'>
        <div className='block-with-email--header'>
          <div className="title">Отримуйте ПРОМОКОДИ ТА ЕКСКЛЮЗИВНІ ПРОПОЗИЦІЇ</div>
          <input type="text" className="email__input" placeholder="Введіть текст" />
          <div>
            <img src={ArrowRight} alt=''/>
          </div>
        </div>
          <img src={Mother} alt="Image" className="block__image" />
      </div>
    </div>
    <div className="contact-block">
        <div className='footer-contact-items'>
            <p className='contact-phone-item'>(063) 128-46-09</p>
            <a href='#' className='contact-email-item'>bubu.shop2018@gmail.com</a>
            <p className='contact-addres-item'>Одеса, вул. Михайлівська 8 
            (щодня з 10:00 до 20:00)</p>
            <Media/>
        </div>

        <div className="footer-information-items">
            <h3 className="information-heading">Інформація</h3>
            <ul className="footer__information-listt">
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Контакти</a></li>
            <li><a href="#">Доставка і оплата</a></li>
            <li><a href="#">Повернення та обмін</a></li>
            <li><a href="#">Політика крнфіденційності</a></li>
            </ul>
        </div>

        <div className="footer-catalog-items">
            <h3 className="catalog-heading">Каталог</h3>
            <ul className="catalog-list">
            <li><a href="#">Дитячі коляски</a></li>
            <li><a href="#">Дитяча кімната</a></li>
            <li><a href="#">Стільці і шезлонги</a></li>
            <li><a href="#">Все для годування</a></li>
            <li><a href="#">Гігієна та догляд</a></li>
            <li><a href="#">Автокрісла</a></li>
            <li><a href="#">Дитячий транспорт</a></li>
            <li><a href="#">Іграшки</a></li>
            <li><a href="#">Дитячий одяг</a></li>
            <li><a href="#">Новий товар</a></li>
            </ul>
        </div>
    </div>
    <div className="block-with-paymant">
      <p>© Bubu 2022. Всі права захищені.</p>

      <div className="footer-paymant-items">
        <a className='footer__payment-item'>
            <img src={Mastercard}/>
        </a>
        <a className='footer__payment-item'>
            <img src={Visa}/>
        </a>
        <a className='footer__payment-item'>
            <img src={Liqpay}/>
        </a>
      </div>
    </div>
  </footer>
  );
}

export default  Footer;
