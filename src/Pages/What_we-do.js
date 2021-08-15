import React from 'react';
import MadeCarousel from '../components/madeCarousel/carousel';
// import Slide from "../customSlider/Slide";





const WhatWeDo = () => {
	return (
	<section className="cf w-80  row center pa2-ns">
			<div className="headertag top">
				<h1 className="h1tag">
					Our Projects
				</h1>
			</div>
				{/* <Slide /> */}
			<MadeCarousel />
			<br />
		 <div className="pa4">
			<blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
			<p className="f5 f4-m f3-l lh-copy measure mt0">
     NGSoft is set for design and development Products and Services targeted at the Digitization of Processes, in the Commercial, Public and Social Subsectors. NGSoft has continuously remained a benchmark for excellence in Vehicular and Transportations, Governance and Finance, Home and Property as well various Social Services in Nigeria. We have Since set scene for expansion to English Speaking West and East African countries in the immediate near future.
    </p>
    <cite className="f6 tracked fs-normal">―NGSoft</cite>
  </blockquote>
    </div>
		</section>
	)
}

export default WhatWeDo
