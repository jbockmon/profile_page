import React from 'react';
import Splash from '../../components/Splash/Splash';

import Works from '../../components/Works/Works';
import classes from './Experience.module.css';

const Experience = () => {
   return (
      <div className={classes.ExperienceDiv}>
         <Splash>
            <h1> Professional Experience</h1>
            <p>Things I have done for money</p>
         </Splash>
         <Works/>
      </div>
   )
}

export default Experience;