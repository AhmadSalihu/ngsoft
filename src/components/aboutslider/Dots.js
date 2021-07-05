import React from 'react'
import '../slider.css'


const Dots = ({ imageSlider, onclick, activeIndex }) => {
	return (
		<section className="all-dots">
				{
					imageSlider.map((image, index) => (
						<span key={index} className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
						onClick={() => onclick(index)}></span>
					))
				}
		</section>
	)
}

export default Dots
