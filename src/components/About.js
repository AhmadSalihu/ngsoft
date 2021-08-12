import React from 'react';
// import Slider from '../components/aboutslider/slider';
// import data from './about.data';
// import AboutCard from './AboutCard';
// import MadeCarousel from './madeCarousel/carousel';
import AbCarousel from '../components/Abcarousel' 

import './about.css'


const About = () => {
	return (
		<div className="about-page">
			{/* <Slider /> */}
    <article data-name="article-full-bleed-background">
  <div className="cf" style={{ background: "url(https://www.zerox24.com/wp-content/uploads/2020/07/Technology-related-business-ideas.png) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
      <header className="b--black-70 pv4">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">About Us</h3>
        {/* <h4 className="f3 fw4 i lh-title mt0">Ngsoft Is a life Solution software Company</h4> */}
      </header>
			</div>
      </div>
      </article>
      <br />
    <div className="pa4">
    <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
    <p className="f6 f4-m f3-l lh-copy measure mt0">
     NGSoft is set for design and development Products and Services targeted at the Digitization of Processes, in the Commercial, Public and Social Subsectors. NGSoft has continuously remained a benchmark for excellence in Vehicular and Transportations, Governance and Finance, Home and Property as well various Social Services in Nigeria. We have Since set scene for expansion to English Speaking West and East African countries in the immediate near future.
    </p>
    <cite className="f6 ttu tracked fs-normal">―NGSoft</cite>
  </blockquote>
      </div>
       <br />
    <AbCarousel />
</div>
  )
}

export default About;