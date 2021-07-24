import React, { Component } from 'react';
import './carousel.styles.css'

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
								<h3>{title}</h3>
								<p>{description}</p>
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