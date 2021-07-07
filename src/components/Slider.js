import React, { useState, useEffect } from 'react'
import SliderContent from './SliderContent';
import { useLocation } from "react-router-dom"
import imageSlider from "./Imageslider"
import Arrows from './Arrow';
import Dots from './Dots';
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
					<div className="slider-container">
						<SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
						<Arrows prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
							nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
						/>
						<Dots activeIndex={activeIndex}
							imageSlider={imageSlider}
							onclick={(activeIndex) => setActiveIndex(activeIndex)} />
					</div>
				)}
		</>
	)
}

export default Slider
