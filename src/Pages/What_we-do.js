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
    		NGSoft Is Set for Design and Development Products and Services Targeted At The Digitization Of Processes, In The Commercial, Public And Social Subsectors. NGSoft Has Continuously Remained a Benchmark for Excellence InVehicular And Transportations, Governance And Finance, Home And Property As Well Various Social Services In Nigeria. We Have Since Set Scene For Expansion To English Speaking West And East African Countries In The Immediate Near Future.
    </p>
    <cite className="f6 tracked fs-normal">―NGSoft</cite>
  </blockquote>
    </div>
		</section>
	)
}

export default WhatWeDo
