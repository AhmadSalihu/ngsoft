import React from 'react';
import "../components/home.css"
import Atj from '../assets/atj.jpg'

import Passion from '../assets/passion.jpg'


const Management = () => {
	return (
		<>
		<section className="mw8 center">
		<h2 className="athelas ph3 ph0-l">News</h2>
	<article className="pv4 b--black-10 ph3 ph0-l">
			<div className="flex flex-column flex-row-ns">
				<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
					<h1 className="f3 athelas mt0 lh-title ceo-title">A. J. Tafida - Group MD/CEO.</h1><br />
					<p className="f4 f4-l lh-copy w-100 athelas">
					Ahmad Tafida Jalingo is the founder and CEO of NGSoft Company, He is from Jalingo Taraba State and he currently lives in Kaduna. He is so passionate about technology and has improve the lives of many citizens in Kaduna State Nigeria. By his unique ideas of software technologies and how software can be used to help ease many hardship that people are facing in this our time.
					</p><br />
					<p className="f4 f4-l lh-copy w-100 athelas">
					Ahmad Tafida Jalingo is the founder and Ceo of NGSoft Company, He is from Jalingo Taraba State and he currently lives in Kaduna State. He is so, passionate towards software technologies and has improve the lives of many citizens in Kaduna State Nigeria. By his unique ideas of software and how software gtechnology can be used to help ease many hardship that people are facing in this our time.
					</p><br />
				</div>
				<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-30-ns">
					<img src={Atj} className="db sixing" alt="" />
				</div>
			</div>
		</article>
		<article className="pv4 b--black-10 ph3 ph0-l">
			<div className="flex flex-column flex-row-ns">
				<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
					<h1 className="f3 athelas mt0 lh-title ceo-title">A. J. Tafida - Group MD/CEO.</h1><br />
				<p className="f4 f4-l lh-copy w-100 athelas">
					Ahmad Tafida Jalingo is the founder and CEO of NGSoft Company, He is from Jalingo Taraba State and he currently lives in Kaduna. He is so passionate about technology and has improve the lives of many citizens in Kaduna State Nigeria. By his unique ideas of software technologies and how software can be used to help ease many hardship that people are facing in this our time.
					</p><br />
					<p className="f4 f4-l lh-copy w-100 athelas">
					Ahmad Tafida Jalingo is the founder and Ceo of NGSoft Company, He is from Jalingo Taraba State and he currently lives in Kaduna State. He is so, passionate towards software technologies and has improve the lives of many citizens in Kaduna State Nigeria. By his unique ideas of software and how software gtechnology can be used to help ease many hardship that people are facing in this our time.
					</p><br />
				</div>
				<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-80 w-40-ns">
					<img src={Atj} className="db sixing" alt="" />
				</div>
			</div>
		</article>
			<article className="pv4 b--black-10 ph3 ph0-l">
			<div className="flex flex-column flex-row-ns">
				<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
					<h1 className="f3 athelas mt0 lh-title ceo-title">Ahmad J Tafida - Group MD/CEO.</h1><br />
				<p className="f4 f4-l lh-copy w-100 athelas">
					Ahmad Tafida Jalingo is the founder and CEO of NGSoft Company, He is from Jalingo Taraba State and he currently lives in Kaduna. He is so passionate about technology and has improve the lives of many citizens in Kaduna State Nigeria. By his unique ideas of software technologies and how software can be used to help ease many hardship that people are facing in this our time.
					</p><br />
					<p className="f4 f4-l lh-copy w-100 athelas">
					Ahmad Tafida Jalingo is the founder and Ceo of NGSoft Company, He is from Jalingo Taraba State and he currently lives in Kaduna State. He is so, passionate towards software technologies and has improve the lives of many citizens in Kaduna State Nigeria. By his unique ideas of software and how software gtechnology can be used to help ease many hardship that people are facing in this our time.
					</p><br />
				</div>
				<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-80 w-40-ns">
					<img src={Atj} className="db sixing" alt="" />
				</div>
			</div>
		</article>
</section>
		<article className="cf">
  <div className="fl w-100 w-100-ns bg-near-white tc">
				<br />
					<section className="pt5 pb4 w-100 w-100-ns bgclr">
					<h className="f3">Our Management Team</h><br />
        	<p className="times lh-copy flex center measure tc f4 mt0">
						Our team is always trying to find the best way possible to revolutionalized the tradition way of doing things and. 

        	</p>
      	</section>	
  </div>
  <div className="fl w-100 w-150-ns bg-light-gray tc">
					<br />
			<img  src={Passion} alt=""></img>
  </div>
</article>
	</>
	)
}

export default Management
