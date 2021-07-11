import React from 'react';
import './home.css';
import Dg from "../assets/Dg.jpg";
import Itech from "../assets/Itech.jpeg"
import Tech from "../assets/Tech.jpg"
import Rencosoft from '../'


const Home = () => {
	return (
		<>
		<article data-name="article-full-bleed-background">
  <div className="cf" style={{ background: "url(https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir ngsoft ng">NG<span className="soft">Soft</span><span className="rmt"> Services</span></h3>
				<h4 className="f3 fw4 i lh-title mt0">We Believe in Having the Best in order to give you the best!
				</h4>
      </header>
      <section className="pt5 pb4">
        	<p className="times lh-copy measure f4 mt0">
						Prasat Suor Prat (Khmer: ប្រាសាទសួព្រ័ត) is a series of twelve towers spanne
						north to south lining the eastern side of royal square in Angkor Thom,
						near the town of Siem Reap, Cambodia. The towers are made from rugged
						laterite and sandstone. The towers are located right in front of
						Terrace of the Elephants and Terrace of the Leper King, flanking the
						start of the road leading east to the Victory Gate, on either side of
						which they are symmetrically arranged. Their function remains unknown.
        	</p>
      	</section>
    	</div>
  	</div>
	</article>
			<br />
			<br />
			<section className="mw7 center">
			<h2 className="athelas ph3 ph0-l">News</h2>
			<article className="pv4 bt bb b--black-10 ph3 ph0-l">
				<div className="flex flex-column flex-row-ns">
					<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
						<h1 className="f3 athelas mt0 lh-title col1">RENT<span className="col2">CO</span><span className="col3">SOFT</span></h1>
						<p className="f5 f4-l lh-copy athelas">
							Digitalized Housing Rent System.<br />
									Rentcosoft provided and easy access to housing and estate within Kaduna metropolis
						</p>
					</div> 
					<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
						<img src="/ngsoftImages/rncsft.jpeg" className="db" alt="" />
					</div>
				</div>
			</article>
			<article className="pv4 bb b--black-10 ph3 ph0-l">
				<div className="flex flex-column flex-row-ns">
					<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
						<h1 className="f3 athelas mt0 lh-title cl1"><span className="cl2">HOME </span>MANAGER</h1>
						<h3 className="f4 athela lh-title cl2 i">The Ultimate House Help</h3><br />
						<p className="f5 f4-l lh-copy athelas">
								Digitalized Home Management System.<br /><br />
									This giant of a whale says it is ready to begin planning a new
							swim later this afternoon. A powerful mammal that relies on fish and plankton instead
							of hamburgers
						</p>
					</div>
					<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
						<img src='/ngsoftImages/Hm.jpeg' className="db" alt="" />
					</div>
				</div>
			</article>
			<article className="pv4 bb b--black-10 ph3 ph0-l">
				<div className="flex flex-column flex-row-ns">
					<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
						<h1 className="f3 athelas mt0 lh-title c1">Kad
							<span className="c2">V</span><span className="c3">Reg</span></h1>
							<h3 className="f4 athela lh-title cl2 i">Kaduna State Online Vehicle Registration</h3>
						<p className="f5 f4-l lh-copy athelas">
								Digitalized Vehicle Registration System <br />
						 from the comfort of your home.
						</p>
					</div>
					<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
						<img src="/ngsoftImages/vreg.jpeg" className="db" alt="" />
					</div>
				</div>
			</article>
			</section>
	</>
	)
}

export default Home;