import React from 'react';

import ListModule from '../ListModule/ListModule';

import classes from './Works.module.css';

const Works = () => {
   let edcim = {
      title: 'Data Center Infrastructure Management (DCIM)',
      summary: 'A DCIM used to aggregate and display the status of PLC based control systems.',
      techSpecs: [
         'Nodejs back end',
         'PostgreSQL database',
         'Express based RESTful API',
         'JWT based authentication',
         'Python based data processing',
         'React front end',
      ],
      detail: 'I was asked to engineer, develop, and deploy a brand new platform from which we would host site level DCIMs. This was to be reproducable and repidly deplyable for each site that would house our new PLC based systems.',
      requirements: [
         'Software agnostic to host operating system',
         'Self hosted DHCP server to control private network',
         'Data aggregation of onsite PLC based control systems',
         'Display stats and graphs populated with dynamically updating realtime information',
         'PostgreSQL database',
         'Administration of individual systems from the DCIM',
         'Role based authentication system',
         'Ability to add new users, admins, control systems',
         'Email alerting system with >99% uptime and reliability',
         'PagerDuty integration',
         'Mobile Responsive'
      ]
   };

   let localMonSys = {
      title: 'Local Monitoring System and Interface',
      summary: 'A monitoring and alert system with a web based GUI to report and interact with a control system.',
      techSpecs: [
         'Nodejs back end',
         'Express based RESTful API',
         'React front end',
         'React Timeseries Charts data visualization',
      ],
      detail: 'This project was essentially a combination of a GUI for editing local configuration files in the brower and a monitoring system. It had to read various system sensors, analyze the data coming from them, and report whether or not they were within specs.',
      requirements: [
         'Report sensor values in quickly ascertainable graphical format',
         'Utilize pre-existing CSV "database" to display rolling 7 day data in graph format',
         'Graphs must be user customizable',
         'Configuration GUI must be touch responsive in browser',
         'Ability to execute already developed scripts from GUI'
      ]
   };

   return (
      <div className={classes.WorksDiv}>
         <ListModule modObj={edcim}/>
         <ListModule modObj={localMonSys}/>
      </div>
   );
}

export default Works;