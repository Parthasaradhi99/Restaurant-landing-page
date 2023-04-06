import React from 'react';
import {images,data} from "../../constants"
import { SubHeading } from '../../components';
import {BsInstagram ,BsArrowLeftShort , BsArrowRightShort} from "react-icons/bs"

import './Gallery.css';

// const dishImages = [images.gallery01,images.gallery02,images.gallery03]
const Gallery = () => {
  return
  (
  <div className='app__gallery'>
    <div className="app__gallery_info">
      <SubHeading text="Instagram"/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <buttton className="custom__button">View More</buttton>
    </div>
    <div className="app__gallery_img">

    </div>
  </div>
  )
};

export default Gallery;
