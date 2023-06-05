import React from "react";

import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import img from '../../images/category/bath.png';

export class CartPage extends React.Component {
    render() {
        return (
            <div className="cart">
                <div className='cart-header'>
                    <h2 className='title'>Кошик</h2>
                    <span className='sale'>Переглянуті товари</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Товар</th>
                            <th>Кількість</th>
                            <th>Сума</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                               <img src={img} alt='img'/>
                            </th>
                            <th>
                              <div className='title'>Коляска 2в1 Anex M/Type Dune mt-01Q</div>
                            </th>
                            <th>
                                <div>
                                    <button>-</button>
                                    <div className='counter'>1</div>
                                    <button>+</button>
                                </div>
                            </th>
                            <th>
                                <div className='discount-price'>
                                    <span>6000</span>грн
                                </div>
                            </th>
                            <button>delete</button>
                        </tr>
                        <tr>
                            <th>
                               <img src={img} alt='img'/>
                            </th>
                            <th>
                              <div className='title'>Коляска 2в1 Anex M/Type Dune mt-01Q</div>
                            </th>
                            <th>
                                <div>
                                    <button>-</button>
                                    <div className='counter'>1</div>
                                    <button>+</button>
                                </div>
                            </th>
                            <th>
                                <div className='discount-price'>
                                    <span>6000</span>грн
                                </div>
                            </th>
                            <button>delete</button>
                        </tr>
                    </tbody>
                </table>

                <div className='summ-box'>
                    <div className='info'>
                    <div className='title'>Сума:</div>
                    <div className='summ'><span>6000</span>грн</div>
                    </div>
                    <button>Оформити замовлення</button>
                    <Link to={ROUTES.HOME}>Продовжити покупки</Link>
                </div>
            </div>
        )
    }
}

export default CartPage;