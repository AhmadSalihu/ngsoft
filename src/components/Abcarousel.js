import React, { Component } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AbCard from './AbCard';

import './carousel.styles.css'


class AbCarousel extends Component {
	state = {
		data: []
	}

	myRef = React.createRef();

	getData = async () => {
		const res = await fetch('aboutdata.json');
		const data = await res.json();
		this.setState({data: data})
	}

	componentDidMount() {
		this.getData();
	}


 prevClick = () => {
	 const slide = this.myRef.current;
	 slide.scrollLeft -= slide.offsetWidth;
	 if (slide.scrollLeft <= -0){
		 slide.scrollLeft = slide.scrollWidth; 
	 }
	};


	nextClick = () => {
		const slide = this.myRef.current;
	 setTimeout(() => {
		 slide.scrollLeft += slide.offsetWidth;
		 if (slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
			 slide.scrollLeft = 0; 
		 }
	 }, 3000);
	};
 
	render() {
		const { data } = this.state;

		return (
			<div className="wrapper">
				<div className="app" ref={this.myRef}>
					<AbCard data={data} />
				</div>
				<div className="row">
					<div className="prev" onClick={this.prevClick}>
					<div><FaChevronLeft /></div>
					</div>
					<div className="next" onClick={this.nextClick}>
					<div><FaChevronRight /></div>
					</div>
				</div>
			</div>
		)
	}
}

export default AbCarousel