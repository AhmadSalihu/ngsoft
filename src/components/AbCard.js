import React, { Component } from 'react';
import '../components/madeCarousel/carousel.styles.css'

class Card extends Component {
	  render() {
		const { data } = this.props;
		return (
			<>
				{
					data.map(({i, src, title, description}) => (
						<div className="img-card" key={i}>
							<img src={src} alt="img" />
							<div>
								<h3 className="card-title">{title}</h3>
								<p className="card-text">{description}</p>
								<button className="btn-style" type="button">More Info</button>
							</div>
						</div>
					))
				}
			</>
		)
	}
}

export default Card