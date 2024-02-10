import React from 'react';
import './works.css';
import PortfolioImg1 from '../../assets/portfolio-1.png';
import PortfolioImg2 from '../../assets/portfolio-2.png';
import PortfolioImg3 from '../../assets/portfolio-3.png';
import PortfolioImg4 from '../../assets/portfolio-4.png';
import PortfolioImg5 from '../../assets/portfolio-5.png';
import PortfolioImg6 from '../../assets/portfolio-6.png';

export const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">Involved Project</h2>
        <span className="worksDesc">I am excited to bring my skills and experience to help the company to achieve their businesses goals and create a high quality services.</span>
        <div className="worksImgs">
            <img src={PortfolioImg1} alt="PortfolioImg1" className="worksImg" />
            <img src={PortfolioImg2} alt="PortfolioImg2" className="worksImg" />
            <img src={PortfolioImg3} alt="PortfolioImg3" className="worksImg" />
            <img src={PortfolioImg4} alt="PortfolioImg4" className="worksImg" />
            <img src={PortfolioImg5} alt="PortfolioImg5" className="worksImg" />
            <img src={PortfolioImg6} alt="PortfolioImg6" className="worksImg" />
        </div>
        <button className="worksBtn">Show more</button>
    </section>
  )
}
