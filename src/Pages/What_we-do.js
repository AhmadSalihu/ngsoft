import React from 'react';
import styled from 'styled-components'
import MadeCarousel from '../components/madeCarousel/carousel';



const Title = styled.h1`
display: flex;
justifyContent: center;
alignItems: center;

`

const WhatWeDo = () => {
	return (
		<div>
			<Title>Our List Of Proucts</Title>
		<MadeCarousel />
		</div>
	)
}

export default WhatWeDo
