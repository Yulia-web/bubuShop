import React, { Component, useContext } from 'react'
import {observer} from "mobx-react-lite";

import ProductCard from '../elements/ProductCard';

import { Context } from '../../index';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import rightArrow from "../../images/icons/rightArrow.png";

function NextArrow({ onClick }) {
  return (
    <div className="arrow next" onClick={onClick}>
      <img src={rightArrow} alt=''/>
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 0,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <NextArrow />,
};

const Reviewed = observer(() => {
  const { product } = useContext(Context);
    return (
      <div className='reviewed-block'>
        <div className='block-header'>
          <h2 className='title'>Ви переглядали</h2>
        </div>
        <div className='reviewed-items'>
          <Slider className='slick-items' {...settings}> 
            {product.goods.map(product => {
                if (product.discount) {
                  return <ProductCard key={product.id} product={product} />;
                }
                return null;
              })}
          </Slider>
        </div>
      </div>
    )
});

export default Reviewed