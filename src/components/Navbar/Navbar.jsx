import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import images from "../../constants/images"
import './Navbar.css';


const Navbar = () => {
  const [mode,setMode] = React.useState(false)
  
  return (

   <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className='app__navbar-links'>
      <li><a className='p__opensans' href="#home">Home</a></li>
      <li><a className='p__opensans' href="#pages">Pages</a></li>
      <li><a className='p__opensans' href="#contactus">contact Us</a></li>
      <li><a className='p__opensans' href="#blog">Blog</a></li>
      <li><a className='p__opensans' href="#landing">Landing</a></li>
    </ul>
    <div className="app__navbar-login">
      <a className='p__opensans' href="#login">Login / Register</a>
      <div></div>
      <a className='p__opensans' href="#booktable">Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
      {!mode && <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>{setMode(true)}}/>}
      {mode &&
      (<div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} onClick={() => {setMode(false)}} className="overlay__close"/>
        <ul className='app__navbar-smallscreen_links'>
      <li><a className='p__opensans' href="#home">Home</a></li>
      <li><a className='p__opensans' href="#pages">Pages</a></li>
      <li><a className='p__opensans' href="#contactus">contact Us</a></li>
      <li><a className='p__opensans' href="#blog">Blog</a></li>
      <li><a className='p__opensans' href="#landing">Landing</a></li>
      </ul>
      </div>)}
    </div>
  </nav>
  );
}

export default Navbar;
