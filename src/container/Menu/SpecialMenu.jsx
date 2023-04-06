import React from 'react';
import {images,data} from '../../constants';
import { SubHeading,MenuItem } from "../../components"

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu'>
    <div className="app__specialMenu-title">
      <SubHeading text="Menu that fits you palatte"/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine .p__cormorant">
        <p className='app__specialMenu-menu_wine-title'>Wine and Beer</p>
        {data.wines.map((item,index) => (
         <MenuItem title={item.title} price={item.price} tags={item.tags} key={index+1}/>  
        ))}
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="" />
      </div>
      <div className="app__specialMenu-menu_cocktails">
        <p className='app__specialMenu-menu_cocktails-title .p__cormorant'>Cocktails</p>
        {data.cocktails.map((item,index) => (
         <MenuItem title={item.title} price={item.price} tags={item.tags}/> 
        ))}
      </div>
    </div>
  </div>
);

export default SpecialMenu;
