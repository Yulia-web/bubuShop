import React from 'react'
import Baner from '../elements/Baner';
import Discount from '../blocks/Discount';
import PopularsCategory from '../blocks/PopularCategory';
import PopularBrands from '../blocks/Brands';
import Reviewed from '../blocks/Reviewed';

export class Home extends React.Component {
  render() {
    return (
      <div className='home-page'>
        <Baner />
        <Discount />
        <PopularsCategory />
        <PopularBrands />
        <Reviewed />
      </div>
    )
  }
}

export default Home;