import React from 'react';
import "./slider.css";
// ..



const SliderContent = ({ activeIndex, imageSlider }) => {
	return (
		<section className="slide-all">
			{imageSlider.map((slide, index) => (
				<div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
					<div data-aos="zoom-out-left">
					<img className="slide-image" src={slide.urls} alt="" />
					</div>
			</div>
			))}
		</section>
	)
}

export default SliderContent
