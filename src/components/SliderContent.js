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
					{/* <h2 className="slide-title">{slide.title}</h2> */}
					{/* <h3 className="slide-text">{slide.description}</h3><br /> */}
			</div>
			))}
		</section>
	)
}

export default SliderContent
