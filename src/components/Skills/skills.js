import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import SoftwareDev from '../../assets/software.png';

import CADDrawing from '../../assets/civil/cad-drawing.png';
import Architect from '../../assets/civil/architect.png';
import CivilDoc from '../../assets/civil/civil-document.png';
import Supervision from '../../assets/civil/supervision.png';
import HelpDesk from '../../assets/civil/help-desk.png';
import TroubleShooting from '../../assets/civil/troubleshooting.png';

export const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">As an experienced Civil Engineering/CAD Technician, 
      my career is marked by participation in landmark projects, including the Hong Kong Boundary Crossing Facilities and 
      various significant Sewage Pumping Stations. My rich background encompasses both the theoretical foundations and 
      practical applications of civil engineering and CAD technologies, enabling me to deliver a comprehensive suite of services to 
      my clients. My areas of expertise include:</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={CADDrawing} alt="CADDrawing" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CAD Drawing</h2>
            <p>Creating precise, detailed CAD drawings to support engineering and architectural projects.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Architect} alt="Architect" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Civil Infrastructure Design</h2>
            <p>Designing sustainable, efficient civil infrastructure through innovative planning and engineering.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={CivilDoc} alt="CivilDoc" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Documentation</h2>
            <p>Producing comprehensive civil project documentation, ensuring accuracy and compliance.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Supervision} alt="Supervision" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Site Supervision and Quality Control</h2>
            <p>Overseeing construction sites to ensure quality, safety, and adherence to timelines.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={HelpDesk} alt="HelpDesk" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Computer Help Desk</h2>
            <p>Providing technical support and solutions for computer and software-related issues.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={TroubleShooting} alt="TroubleShooting" className="skillBarImg" />
          <div className="skillBarText">
            <h2>TroubleShooting</h2>
            <p>Identifying and resolving technical problems swiftly to minimize downtime and improve efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
