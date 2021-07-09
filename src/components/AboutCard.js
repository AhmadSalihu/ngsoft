import React from 'react'
import './about.css';


const AboutCard = ({ item }) => {
	return (
		<div className="post-container">
			<div className="post">
				<div className="image">
					<img src={item.imgSrc} alt="" />
				</div>
				<div className="content">
					<a hre="/#" className="title">Post Name</a>
				<p>	Prasat Suor Prat (Khmer: ប្រាសាទសួព្រ័ត) is link series of twelve towers spanne
						north to south lining the eastern side of royal square in Angkor Thom,
						near the town of Siem Reap, Cambodia.</p>
				<a href="/#" className="lnk">Read more</a>
			</div>  
			</div>
    </div>   
	)
}

export default AboutCard
