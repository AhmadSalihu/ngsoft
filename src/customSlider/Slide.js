import React, { useEffect, useState } from 'react'
import Arrow from './Arrow';
import imageSlide from './imageSlide';

export default function Slide() {
	let len = imageSlide.length -1;
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
		}, 3000)
		return () => {
			clearInterval(interval)
		}
	}, [activeIndex])

	return (
		<div className="slider-container">
			<Arrow prev={() => setActiveIndex(activeIndex - 1 ? len : activeIndex - 1)}
				nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} />
		</div>
	)
}
