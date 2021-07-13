import React, { Component } from 'react';
import '../components/madeCarousel/carousel.styles.css'

class Card extends Component {
	  render() {
			const { data } = this.props;
			console.log(data)
		return (
			<>
				{
					data.map((item, i) => (
						<div className="img-card" key={i}>
							<img src={item.src} alt="img" />
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