import React, { useState } from 'react';
import './carousel.styles.css'

const Card = ({ item }) => {
	const [showInfo, setShowInfo] = useState(false)
	
	return (
		<>
			<div className="img-card">
				<img src={item.src} alt="img" />
				<div >
					<h3>{item.title}</h3><br />
					<h4>{item.description}</h4><br />
					{showInfo &&  <p>{item.moreInfo}</p>}		
					<button onClick={() => setShowInfo(!showInfo)}>{showInfo ? <span>Less Info</span> : <span>More Info</span>}</button>
				</div>
			</div>
			</>
		)
	}
	
	export default Card