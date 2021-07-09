import React, { Component } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AbCard from "./AbCard";


import '../components/madeCarousel/carousel.styles.css'


class MadeCarousel extends Component {
	state = {
		aboutdata: []
	}

	myRef = React.createRef();
	getData = async () => {
		const res = await fetch('aboutdata.json');
		const data = await res.json();
		this.setState({aboutdata: data})
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
		slide.scrollLeft += slide.offsetWidth;
		if (slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
			slide.scrollLeft = 0; 
		}
	};
	render() {
		const { aboutdata } = this.state;
		console.log(aboutdata);
		return (
				<div className="wrapper">
				<div className="app" ref={this.myRef}>
					<AbCard aboutdata={aboutdata} />
				</div>
				<div className="row">
					<div className="prev" onClick={this.prevClick}>
					<div><FaChevronLeft /></div>
					</div>
					<div className="next" onClick={this.nextClick}>
					<div><FaChevronRight /></div>
						<img src="images/next.png" alt="" />
					</div>
				</div>
			</div>
		)
	}
}

export default MadeCarousel;