import React, { useState } from 'react';
import './carousel.styles.css'

const Card = ({ item }) => {
	const [showInfo, setShowInfo] = useState(false)
	
	return (
		<>
			<div className="img-card">
				<img src={item.src} alt="img" />
				<div >
					<h3 className="card-title">{item.title}</h3><br />
					<h4 className="card-text">{item.description}</h4><br />
					{showInfo &&  <p className="card-text">{item.moreInfo}</p>}		
					<button className="btn-style" onClick={() => setShowInfo(!showInfo)}>{showInfo ? <span>Less Info</span> : <span>More Info</span>}</button>
				</div>
			</div>
			</>
		)
	}
	
	export default Card