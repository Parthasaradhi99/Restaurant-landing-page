import React from 'react';
import images from '../../constants/images';

const SubHeading = ({ text }) => (
  <div>
    <p className='p__cormorant'>{text}</p>
    <img src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
