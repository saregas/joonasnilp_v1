import React from 'react';

import pilt1 from '../assets/images/work/splash.png';
import pilt2 from '../assets/images/work/sild.jpg';
import pilt3 from '../assets/images/work/maja.jpg';

import Card from './card';
import workDataArray from '../assets/data/work_data';



export default props=>{
    
    return(
        <section id='work'>
            <h3>Fotod</h3>
            <hr/>
            <div className="row">
            {cardList}
            </div>
            
        </section>
    );
}

