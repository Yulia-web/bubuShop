import React from 'react';

import {Link} from "react-router-dom";

import {ROUTES} from '../../utils/routes';

class Sidebar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          categories: [
              {
                  key: 'carriage',
                  name: 'Дитячі коляски',
                  image: 'carriage.svg'
              },
              {
                  key: 'room',
                  name: 'Дитяча кімната',
                  image: 'room.svg'
              },
              {
                  key: 'chair',
                  name: 'Стільці і шезлонги',
                  image: 'chair.svg'
              },                
              {
                  key: 'feeding',
                  name: 'Для годування',
                  image: 'feeding.svg'
              },
              {
                  key: 'soap',
                  name: 'Гігієна і догляд',
                  image: 'soap.svg'
              },
              {
                  key: 'autochair',
                  name: 'Автокрісла',
                  image: 'autochair.svg'
              },
              { 
                  key: 'car',
                  name: 'Дитячий транспорт',
                  image: 'car.svg'
              },
              {
                  key: 'toy',
                  name: 'Іграшки',
                  image: 'toy.svg'
              },
              {
                  key: 'clothes',
                  name: 'Одяг',
                  image: 'clothes.svg'
              },
              {
                  key: 'new',
                  name: 'Новий товар',
                  image: 'new.svg'
              }                
          ]
      }
  }
  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-header'>
          <div class="sidebar-burger">
            <span></span>
          </div>
          <div className='title'>Каталог</div>
        </div>

        <nav>
          <ul className='menu'>
              {this.state.categories.map(el => (
                <Link to={ROUTES.PRODUCTS}>
                  <li key={el.key}>
                    <img src={"./images/category-icons/" + el.image}/>
                    {el.name}
                  </li>
                </Link>
              ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
