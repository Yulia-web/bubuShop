import React from 'react'

import Favourite from '../../images/icons/favorite.svg';
import Comparison from '../../images/icons/сomparison.svg';

export const Actions = () => {
  return (
    <div className='actions'>
        <div className='action-item'>
            <img src={Favourite} alt='favorite'/>
            <p>У вибране</p>
        </div>

        <div className='action-item'>
            <img src={Comparison} alt='сomparison'/>
            <p>Порівняти</p>
        </div>
    </div>
  )
}

export default Actions;