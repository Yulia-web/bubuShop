import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";

import { Context } from '../../index';

const SidebarFilte = observer(() => {
  const { product } = useContext(Context);
  return (
    <div className='sidebar-filter'>
        <div className='sidebar-filter-categories'>
          <div className='title'>Категорія</div>
          <div className='filter-items'>
            { product.categories.map( goods =>
              <div className='filter-item' key={goods.id}>
                  <input type='checkbox'/>
                  <label>{goods.name}</label>
              </div>           
            )}
          </div>
        </div>
        <div className='in-stock'>
          <input type='checkbox' name="in-stock"/>
          <label>В наявності</label>
        </div>
        <div className='in-discount'>
          <input type='checkbox' name="in-discount"/>
          <label>Зі знижкою</label>
        </div>
        <div className='sidebar-filter-price'>
          <div className='title'>Ціна</div>
        </div>
        <div className='sidebar-filter-producer'>
          <div className='title'>Виробник</div>
          <div className='filter-items'>
            {product.producer.map(produser =>
              <div className='filter-item' key={produser.id}>
                <input type='checkbox'/>
                <label>{produser.name}</label>
              </div>
            )}
          </div>
        </div>
    </div>
  );
});

export default SidebarFilte;