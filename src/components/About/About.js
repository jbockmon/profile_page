import React from 'react';

import classes from './About.module.css';

const About = () => {
   return (
      <div className={classes.AboutDiv}>
         <h2>About Me</h2>
         <p>
            Howdy! I am A full stack developer from Austin, TX with an emphasis in JavaScript, Node.js, and React development. 
            I am a software engineer with a long history of IT support and DevOps. I have a strong professional background in developing and delivering solutions in both the hardware and software realms. 
            <br/> <br/>
            I am a devoted father of two young children, and love to spend a day in the kitchen cooking, or an evening in the back yard by the grill. 
            I also make a mean brisket, but my wife would say my smoked turkey is far better. 
         </p>
      </div>
   );
}

export default About;