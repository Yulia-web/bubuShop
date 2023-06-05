import React, { useContext, useEffect } from 'react';
import {observer} from "mobx-react-lite";

import SidebarFilter from "../elements/SidebarFilter";

import { Context } from '../../index';
import { fetchCategories, fetchProducer, fetchGoods } from '../../http/goodsAPI';

import ProductCard from '../elements/ProductCard';

const Products = observer(() => {
  const { product } = useContext(Context);

  useEffect(() => {
    fetchCategories().then(data => product.setCategories(data))
    fetchProducer().then(data => product.setProducer(data))
    fetchGoods().then(data => product.setGoods(data.rows))
  }, [])

  return (
    <div>
      <div>Header</div>
      <div>
        <SidebarFilter />
      </div>
      <div>
       {product.goods.map(product =>
          <ProductCard key={product.id} product={product}/>
       )}   
      </div>
    </div>

  );
});

export default Products;