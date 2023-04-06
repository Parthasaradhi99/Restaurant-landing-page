import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center'>
    <div className='app__aboutus_overlay flex__center '>
        <img src={images.G} alt="" />
        </div>
  <div className="app__aboutus-content">      
    <div className="app__aboutus-about">
      <h1 className='headtext__cormorant'>About us</h1>
      <img src={images.spoon} alt="spoon" />
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button className='custom__button'>Know More</button>
    </div>
    <div className="app__aboutus-knife">
      <img src={images.knife} alt="knife" />
    </div>
    <div className="app__aboutus-history">
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} alt="spoon" />
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
      <button className='custom__button'>Know More</button>
    </div>
    </div>
  </div>
);

export default AboutUs;
