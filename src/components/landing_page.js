import React from 'react';
import pilt1 from '../assets/images/work/splash.png';
import pilt2 from '../assets/images/work/sild.jpg';
import pilt3 from '../assets/images/work/maja.jpg';
import video1 from '../assets/videod/insta_m.mp4';
import { Carousel } from 'react-responsive-carousel';


const getBrowserWidth = function(){
    if(window.innerWidth < 991){
        // Small Device
        return "sm"
    } else {
        // Large Device
        return "lg"
    }
};


const device = getBrowserWidth();

export default props =>{
    if (device === "sm"){
        return(
            <Carousel emulateTouch showStatus={false} showArrows={false} infiniteLoop autoPlay showThumbs={false} dynamicHeight>
                    <div>
                        <img src={pilt1} alt=""/>
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img src={pilt2} alt=""/>
                        
                    </div>
                    <div>
                        <img src={pilt3} alt=""/>
                        
                    </div>
            </Carousel>
        );
    } else {
        return(
            <div className="video-container">
                <video className="responsive-video" autoPlay loop muted>
                    <source src={video1} type="video/mp4"></source>
                </video>
                <div className="overlay-desc">
                    <h1>JoonasNilp</h1>
                </div>
            </div>



        );
    }
}



