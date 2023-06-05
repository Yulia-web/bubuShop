import React from 'react';
import { useNavigate  } from 'react-router-dom';

import Favorite from '../../images/icons/favorite.svg'
import Comparison from '../../images/icons/сomparison.svg'

import authochair from "../../images/1.png";
import { ROUTES } from '../../utils/routes';

const ProductCard = ({product}) => {
  const history = useNavigate();
  
  const handleClick = (id) => {
    history('/product/' + id);
  };

  let discount = product.price - ((product.discount/100)*product.price);
  return (
    <div className='product-item' onClick={() => handleClick(product.id)}>
      {product.discount ? <span className='discount'>-{product.discount}%</span> : null}
      <img src={'http://localhost:5000/' + product.image} alt='img'/>
      <div className='title'>{product.name}</div>
      <div className='price'>
          {product.discount ? <div className='discount-price'><span>{product.price}</span>грн</div> :  <div className='standart-price black'><span>{product.price}</span>грн</div> }
          {product.discount ? <div className='standart-price'><span>{discount}</span>грн</div> : null }
      </div>
      {!product.quantity >= 1 ? <div className='not-available'>Немає в наявності</div> : null }
      <div className='action'>
          <button className='buy'>Купити</button>
          <a href='#' className='favourite'>
              <img src={Favorite}/>
          </a>
          <a href='#' className='comprison'>
              <img src={Comparison}/>
          </a>
      </div>
     </div>
  );
};

export default ProductCard;