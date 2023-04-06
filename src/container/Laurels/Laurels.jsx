import React from 'react';
import { SubHeading } from '../../components';
import {images, data} from "../../constants"
import './Laurels.css';

const Laurels = () => {
  const Award = ({award : {title,imgUrl ,subtitle}}) => (
      <div className="app__laurels-award">
        <div className="app__laurels-award_img">
          <img src={imgUrl} alt="" />
        </div>
        <div className="app__laurels-award_info">
          <p className='p__cormorant'>{title}</p>
          <p className='app__laurels-award_info-p'>{subtitle}</p>
        </div>
      </div>
  )
  return (
  <div className='app__wrapper app__bg section__padding'>
  <div className="app__wrapper_info">
    <SubHeading text="Awards & recognition"/>
    <h1 className='headtext__cormorant'>Our Laurels</h1>
    <div className="app__wrapper_awards">
    {data.awards.map((item,index) => <Award award={item} key={index+1}/>)}
    </div>
  </div>
  <div className="app__wrapper_img">
    <img src={images.laurels} alt="" />
  </div>
  </div>
  )
};

export default Laurels;
