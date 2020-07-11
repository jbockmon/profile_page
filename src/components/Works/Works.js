import React from 'react';

import ListModule from '../ListModule/ListModule';

import classes from './Works.module.css';

const Works = () => {
   let dcim = {
      title: 'DCIM and Service Platform',
      summary: 'Site level Data Center Infrastructure Management interface with additional service capabilities.',
      role: 'Sole Architect, Engineer, Developer, DBA, UI Designer, QA, and DevOps',
      techSpecs: [
         'Nodejs back end',
         'Express based RESTful API',
         'React front end',
         'Bootstrap',
         'React Timeseries Charts data visualization',
         'OpenVPN server',
         'Postgres database',
         'Modbus/TCP polling'
      ], 
      detail: 
         'This project was to replace the site level monitoring system of the previous generation control system. ' +
         'It needed to provide a secure platform for servicing units remotely, as well as display critical sensor and diagnostic information ' +
         'in a manner consistent with customer expectations. It also needed to compare aggregated data over time, as well as between devices' + 
         'to accurately diagnose and predict problems within critical server infrastructure.',
      requirements: [
         'Able to integrate any number of PLCs',
         'DHCP server to provide local network to all connected PLCs',
         'OpenVPN server to allow access to both the DCIM platform as well as all local PLCs with Schneider proprietary software',
         'Update and alert data transmission resilience through lost internet connections',
         'Advanced diagnostic capabilities that catch out of spec conditions as well as predict future conditions through trend analysis',
         'REST API + Modbus + Bacnet servers for integration with existing customer infrastructure',
         'Ability to interface with multiple cloud DCIM providers including Schneider Machine Advisor'
      ]
   }

   let newPlc = {
      title: 'Control System Redesign',
      summary: 'Creation and transition to new PLC based architecture.',
      role: 'Sole Architect, Engineer, Developer, QA, and DevOps',
      techSpecs: [
         'Structured Text based implementation',
         'Ladder logic and Function Block Diagram PIDs',
         'Modbus RTU controlled VFDs',
         'Modbus TCP register server'
      ],
      detail: 
         'Management decided to switch the flagship product from a custom built x86 design with >10 year old hardware and software' +
         'to a modern PLC solution that monitors various sensors and adjusts multiple controllers to cool servers in a liquid cooling environment.' +
         'This product needed to have a unified code base that controls any combination of multiple VFDs, coolers, and valve actuators. It also had to support' +
         'multiple products with differeing sensor and monitoring packages on the same code base. ',
      requirements: [
         '>99% uptime',
         '2N reliability',
         'Runs 3 independent PIDs, controlling coolant flow, water flow, and cooling tower speed',
         'Integration with Schneider VFDS',
         'Self correcting diagnostics',
         'Able to run completely independently or able to integrate into a DCIM',
         'Unified code base must run all products without custom builds',
         'Web based interface'
      ]
   };

   let localMonSys = {
      title: 'Local Monitoring System and Interface',
      summary: 'A monitoring and alert system with a web based GUI to report and interact with a control system.',
      role: 'Sole Architect, Engineer, Developer, DBA, UI Designer, QA, and DevOps',
      techSpecs: [
         'Nodejs back end',
         'Express based RESTful API',
         'React front end',
         'React Timeseries Charts data visualization',
         'Modbus Server for DCIM integration'
      ],
      detail: 
         'This project was to modernize an aging product by providing a web interface for it. The web interface had to interact with various ' +
         'system files and databases in order to display all pertinent information in a server cooling solution. It also had to act as a visual ' +
         'interface for editing configuration files with automatic parsing, input scrubbing, and error detection to allow technicians to ' +
         'utilize a browser instead of a linux terminal for system management.',
      requirements: [
         'Report sensor values in quickly ascertainable graphical format',
         'Utilize pre-existing CSV "database" to display rolling 7 day data in graph format',
         'Graphs must be user customizable',
         'Configuration GUI must be touch responsive in browser',
         'Ability to execute already developed scripts from GUI',
         'Modbus server broadcast for Schneider EcoStruxure DCIM integration'
      ]
   };

   return (
      <div className={classes.WorksDiv}>
         <ListModule modObj={dcim}/>
         <ListModule modObj={newPlc}/>
         <ListModule modObj={localMonSys}/>
      </div>
   );
}

export default Works;