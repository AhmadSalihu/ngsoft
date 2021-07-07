import React, { Component } from 'react';
import './carousel.styles.css'

class Card extends Component {
	  render() {
		const { data } = this.props;
		return (
			<>
				{
					data.map((item, i) => (
						<div className="card" key={i}>
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