import React from 'react';
import '../slider.css'


const SliderContent = ({ activeIndex, imageSlider }) => {
	return (
		<div className="slider-container">
			{
				imageSlider.map((image, index) => (
					<div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
						<img className="slide-image" src={image.src} alt="" />
						<h1 className="slide-title">{image.title}</h1>
						<h2 className="slide-subtitle">{image.subtitle}</h2>
						<span className="slide-text">{image.description}</span>
				</div>
				))
			}
		</div>
	)
}

export default SliderContent
