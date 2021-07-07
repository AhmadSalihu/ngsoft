import React, { useState, useEffect } from 'react'
import imageSlider from './ImageSlider';
import Dots from "./Dots";
import Arrows from "./arrows"
import SliderContent from './sliderContent';
import '../slider.css'

const len = imageSlider.length - 1;


const Slider = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
	}, 5000)
	return () => {
		clearInterval(interval)
	}
}, [activeIndex]);

	return (
		<div className="slider-container">
			<SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
			<Dots activeIndex={activeIndex} imageSlider={imageSlider} onclick={() => setActiveIndex(activeIndex)} />
			<Arrows
				prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
				nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
				/>
		</div>
	)
}

export default Slider
