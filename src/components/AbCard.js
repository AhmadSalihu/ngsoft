import React, { Component } from 'react';
import '../components/madeCarousel/carousel.styles.css'

class Card extends Component {
	  render() {
			const { aboutdata } = this.props;
			console.log(aboutdata)
		return (
			<>
				{
					aboutdata.map((item, i) => (
						<div className="card" key={i}>
							<img src={item.imgSrc} alt="img" />
							<div>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								<a href="/">Read more</a>
							</div>
						</div>
					))
				}
			</>
		)
	}
}

export default Card