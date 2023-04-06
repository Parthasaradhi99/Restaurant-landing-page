import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title,price,tags}) => (
  <div className='app__menuItem'>
    <div className="app__menuItem-item">
        <h1 className='app__menuItem-item_title'>{title}</h1>
        <div className='line'></div>
        <p className='app__menuItem-item_price p__opensans'>{price}</p>
    </div>
    <p className='app_menuItem-tags'>{tags}</p>
  </div>
);

export default MenuItem;
