import React from 'react';
import SubHeading from "../../components/SubHeading/SubHeading"
import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div className='app__wrapper'>
    <div className="app__wrapper-content">
      <SubHeading text="Chase the new Flavour" className="app__wrapper-content_SubHeading"/>
      <h1 className='app__header-h1'>
      The key to Fine dining
      </h1>
      <p className='app__header-p'>
      Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
      </p>
      <button className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper-img flex__center">
        <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
