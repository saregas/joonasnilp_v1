import React from 'react';

import pilt1 from '../assets/images/work/splash.png';
import pilt2 from '../assets/images/work/sild.jpg';
import pilt3 from '../assets/images/work/maja.jpg';
import video1 from '../assets/videod/insta.mp4';
import { Slider, Slide } from 'react-materialize';

/*
export default props =>{
    return(
        <div className='landing-img'id="landing">
        <img src={splash} alt="landing imd"/>
        </div>
    );
}
*/

/*
export default props =>{
    return(
        <Carousel
            
            options={{ fullWidth: true, duration: 200, indicators: true, autoplay: true}}
            
            
            images={[
                pilt1,
                pilt2,
                pilt3
                
            ]}
        />
    );
}
*/
export default props =>{
    return(
        <Slider>
            <Slide
              src={pilt1}
              placement="left"
              title="Fotod">
              Pildistatud Austraalias
            </Slide>
            <Slide
            
              src={video1}
              title="Videod"
              >
              {/* Pildistatud Nikon .. ja .. objektiiviga Kuskil */}
            </Slide>
            <Slide
              src={pilt3}
              title="Droonikaadrid"
              placement="right">
              Pildistatud Phantom 4 drooniga
            </Slide>
        </Slider>
    );
}



