import React, { useContext } from 'react';
import {Link} from "react-router-dom";

import {ROUTES} from '../../utils/routes';
import Media from '../elements/Media';
import Sidebar from "../elements/Sidebar";

import Logo from '../../images/logo.svg';

import Login from "../../images/icons/user.svg";
import Compration from "../../images/icons/сomparison.svg";
import Cart from "../../images/icons/cart.svg";
import Favorite from "../../images/icons/favorite.svg";
import { Context } from '../../index';

export const Header = () => {
  const {user} = useContext(Context);
  return (
    <header className="header">
        <div className="top-bar container">
        <div className="top-bar__logo">
            <Link to={ROUTES.HOME}>
              <img src={Logo} alt="logo"/>
            </Link>
        </div>

        <nav className="top-bar__nav">
            <ul className="top-bar__nav-list">
                <li className="top-bar__nav-item">
                    <a href="#">Про нас</a>
                </li>
                <li className="top-bar__nav-item">
                    <a href="#">Контакти</a>
                </li>
                <li className="top-bar__nav-item">
                    <a href="#">Доставка і оплата</a>
                </li>
                <li className="top-bar__nav-item">
                    <a href="#">Повернення і обмін</a>
                </li>
            </ul>
        </nav>

        <div className="contact-info">
            <Media/>
            <div className="phone-number">(063)128-46-09</div>
            <button className="language-toggle">
                <span className='active'>Укр</span>
                <span>Рус</span>
            </button>
        </div>
        <a href='' className="login-link">
            <img src={Login} className="login-icon" alt="login" />
            {!user.isAuth ? <Link to={ROUTES.LOGIN}><div>Вхід</div></Link> : <Link to={ROUTES.HOME}><div>Кабінет</div></Link> }
        </a>
        </div>

        <div className="sub-header container">
            {/*<Sidebar />*/}
            <div className="search-bar">
                <input type="search" name='search' autoComplete='off' onChange={ () => {} } value="" placeholder="Я шукаю..." />
            </div>

            <div className="actions">
                <a href="#">
                    <img src={Compration} className="compration-icon" alt="compration icon" />
                    <span className="counter">0</span>
                </a>
                <Link to={ROUTES.CART}>
                    <img src={Cart} className="cart-icon" alt="cart icon" />
                    <span className="counter cart">0</span>
                </Link>
                <a href="#">
                    <img src={Favorite} className="liked-icon" alt="liked icon" />
                    <span className="counter">0</span>
                </a>
            </div>
        </div>
  </header>
  )
}

export default Header;