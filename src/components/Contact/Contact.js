import React from 'react';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare, FaFileAlt } from 'react-icons/fa';

import classes from './Contact.module.css'
const Contact = () => {
   return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '26px' }}>
      <div className={classes.ContactDiv}>
         <h2>Contact</h2>
         <ul>
            <li><a href={'https://github.com/jbockmon/'}><FaGithubSquare/> Github</a></li>
            <li><a href={'https://www.linkedin.com/in/jason-bockmon/'}><FaLinkedin/> Linked In</a></li>
            <li><a href={''}><FaEnvelopeSquare/> Email</a></li>
            <li><a href={''}><FaFileAlt/> Resume</a></li>
         </ul>
      </div>
      </IconContext.Provider>
   );
}

export default Contact;