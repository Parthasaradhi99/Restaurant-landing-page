import React from 'react';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs"
import {meal} from "../../constants"

import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = React.useState(false);
  const vidRef = React.useRef();

  function handleClick(){
    setplayVideo((prevState) => (!prevState))
    if(playVideo) {
      vidRef.current.pause();  /* check thisout this is new */
    }
    else{
      vidRef.current.play()
    }
  }

  return (
  <div className='app__video'>
        <video src={meal} type="video/mp4" loop muted controls={false} ref={vidRef}></video>
      <div className="app__video-overlay flex__center">
          <div className="app__video-overlay_circle flex__center" onClick={handleClick}>
              { playVideo ? <BsFillPauseFill color='#fff' fontSize={27}/> : <BsFillPlayFill color='#fff' fontSize={27}/>}
          </div>
      </div>
  </div>
  )
};

export default Intro;
