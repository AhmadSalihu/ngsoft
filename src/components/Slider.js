import React, { useState, useEffect } from 'react'
import SliderContent from './SliderContent';
import { useLocation } from "react-router-dom"
import imageSlider from "./Imageslider"
import logo from '../assets/companylogo.png';
// import Arrows from './Arrow';
// import Dots from './Dots';
import "./slider.css"
const len = imageSlider.length - 1;
console.log(imageSlider)
const Slider = () => { 
	const [activeIndex, setActiveIndex] = useState(0);

	const location = useLocation();
	
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
		}, 5000);
		return () => clearInterval(interval);
	}, [activeIndex]);
	return (
	<>
			{
				location.pathname === '/' && (
					<div style={{ backgroundImage:`url(${logo})` }} className="slider-container">
						<SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
					</div>
				)}
			<div>
			</div>
		</>
	)
}

export default Slider
