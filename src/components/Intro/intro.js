import React, { useState, useEffect  } from 'react';
import './intro.css';
import background from '../../assets/selfimage.png';
import hireMeImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

export const Intro = () => {
  const jobNames = ['Civil Engineer', 'AutoCAD Technician', 'BIM Modeller']; // Array of Job Description
  const [jobName, setJobName] = useState(jobNames[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the index to the next jobName, loop back to the start if at the end
      setIndex((prevIndex) => (prevIndex + 1) % jobNames.length);
    }, 3000); // Change jobName every 3 second

    // Update the jobName based on the index
    setJobName(jobNames[index]);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [index]); // Dependency array: effect runs when `index` changes

  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">
                I'm 
                <span className="introName"> Ben</span><br />
                {jobName}
            </span>
            <p className="introPara">I am a recent graduate student and a skilled web developer</p>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            ><button className="btn"><img src={hireMeImg} alt="HireMe" className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={background} alt="" className="background" />
    </section>
  )
}
