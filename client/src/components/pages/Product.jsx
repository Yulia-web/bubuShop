import React, { useContext, useEffect, useState } from "react";

import Breadcrumbs from "../elements/Breadcrumbs";
import Actions from "../elements/Actions";

import Star from "../../images/icons/Star.png"; 
import Carriage from "../../images/sliders-image/carriage.png";
import Img from "../../images/sliders-image/smollImg.png"; 
import Reviewed from "../blocks/Reviewed";
import CommentList from "../elements/CommentList";

import { fetchGoodsOne } from '../../http/goodsAPI';
import { useParams } from "react-router-dom";

import { Context } from '../../index';

const Product = () => {
  const { product } = useContext(Context);
  const [id, setId] = useState('');

  useEffect(() => {
    fetchGoodsOne(id).then(data => product.setGoods(data.rows))
  }, [id]);

  useEffect(() => {
    setId(id);
  }, []);

          return (
            <div className="product-page">
                {product.goods.map(product =>
                <div>
                <Breadcrumbs />
                  <div className="tovar-card">
                      <div className="title">{product.name}</div>
                      <Actions />
                  </div>
                  <div className="short-info">
                      {!product.quantity >= 1 ? <div className='not-available'>Немає в наявності</div> : <div className="in-stock">В наявності</div> }
                      <div className="code">{product.code}</div>
                      <div className="rating">
                          <span>4.5</span>
                          <img src={Star} alt="star"/>
                      </div>
                      <div className="comments">9 відгуків</div>
                  </div>
                  <div className="product-card">
                      <div className="slider-items">
                          <div className="slider-item">
                              <img src={'http://localhost:5000/' + product.image} alt="slide"/>
                          </div>
                          <div className="slider-item">
                              <img src={'http://localhost:5000/' + product.image} alt="slide"/>
                          </div>
                          <div className="slider-item">
                              <img src={'http://localhost:5000/' + product.image} alt="slide"/>
                          </div>
                          <div className="slider-item">
                              <img src={'http://localhost:5000/' + product.image} alt="slide"/>
                          </div>
                      </div>
                      <div className="product-card--info">
                          <div className="product-color">
                              <div className="product-color--header">Колір:</div>
                              <div className="product-color-checkboxes">
                                  <input type="checkbox" className="blue" name="scales" checked />
                                  <input type="checkbox" className="red" name="scales" />
                                  <input type="checkbox" className="green" name="scales" />
                              </div>
                          </div>
                          <div className="product-gender">
                              <div className="product-gender--header">Стать:</div>
                              <div className="product-color-checkboxes">
                                  <div>
                                      <input type="checkbox" checked/>
                                      <label>Хлопчик</label>
                                  </div>
                                  <div>
                                      <input type="checkbox"/>
                                      <label>Дівчинка</label>
                                  </div>
                              </div>
                          </div>
                          <div className="buy">
                              <button className="buy-now pink">КУПИТИ</button>
                              <button className="buy-in-one-click white">Купити в 1 клік</button>
                          </div>
                          <div className="location-info">
                              <div className="title">Ви з Одеси? Заберіть товар у магазині</div>
                              <div className="addres">Одеса, вул. Михайлівська, 8(10:00-19:00 щодня)</div>
                              <a href="#">Забрати сьогодні</a>
                          </div>
                          <div className="additional-information">
                              <a href="#" >Оплата і доставка</a>
                              <a href="#" >Повернення і обмін</a>
                              <a href="#" >Контакти</a>
                          </div>
                      </div>
                  </div>
                  <div className="description-block">
                      <div className="description">
                          <div className="description-header">Опис</div>
                          <div className="description-content">
                            {product.description}
                          </div>
                          <button>Докладніше</button>
                      </div>
                      <div className="characteristics">
                          <div className="characteristics-header">Характеристики</div>
                          <div className="characteristics-list">
                              <div className="list-item">
                                  <div className="key">Виробник</div>
                                  <div className="value">{product.producerId}</div>
                              </div>
                              <div className="list-item">
                                  <div className="key">Країна</div>
                                  <div className="value">{product.country}</div>
                              </div>
                              <div className="list-item">
                                  <div className="key">Колір</div>
                                  <div className="value">Сірий</div>
                              </div>
                              <div className="list-item">
                                  <div className="key">Стать</div>
                                  <div className="value">Хлопчик/дівчинка</div>
                              </div>
                              <div className="list-item">
                                  <div className="key">Вага</div>
                                  <div className="value">{product.weight}</div>
                              </div>
                              <div className="list-item">
                                  <div className="key">Розмір (ДхШхВ)</div>
                                  <div className="value">{product.size}</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="comments-block">
                      <div className="comments-block--header">
                          <div className="raiting">
                              <div className="comments-count">Відгуки (9)</div>
                              <div className="raiting-count">Рейтинг: 
                                  <span>
                                      4.5 
                                      <img src={Star} alt="start"/>
                                  </span>
                              </div>
                          </div>
                          <button className="pink">+ Написати відгук</button>
                      </div>
                      <div className="comment-items">
                        <CommentList/>
                      </div>
                      <button className="look-more">Показати більше</button>
                  </div>
                  <Reviewed/>
                </div>
                )}   
               
            </div>
        )
}

export default Product;