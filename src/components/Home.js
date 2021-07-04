import React from 'react';
import './home.css';

const Home = () => {

	return (
		<>
		<article data-name="article-full-bleed-background">
  <div className="cf" style={{ background: "url(https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir ngsoft">Ngsoft Solutions</h3>
        <h4 className="f3 fw4 i lh-title mt0">We Believe in Having the Best in order to render the best!</h4>
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
						<h1 className="f3 athelas mt0 lh-title">Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction</h1>
						<p className="f5 f4-l lh-copy athelas">
							The tech giant says it is ready to begin planning a quantum
							computer, a powerful cpu machine that relies on subatomic particles instead
							of transistors.
						</p>
					</div>
					<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
						<img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="" />
					</div>
				</div>
				<p className="f6 lh-copy gray mv0">By <span className="ttu">Robin Darnell</span></p>
				<time className="f6 db gray">Nov. 21, 2016</time>
			</article>
			<article className="pv4 bb b--black-10 ph3 ph0-l">
				<div className="flex flex-column flex-row-ns">
					<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
						<h1 className="f3 athelas mt0 lh-title">A whale takes up residence in a large body of water</h1>
						<p className="f5 f4-l lh-copy athelas">
							This giant of a whale says it is ready to begin planning a new
							swim later this afternoon. A powerful mammal that relies on fish and plankton instead
							of hamburgers.
						</p>
					</div>
					<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
						<img src="http://mrmrs.github.io/photos/whale.jpg" className="db" alt="" />
					</div>
				</div>
				<p className="f6 lh-copy gray mv0">By <span className="ttu">Katherine Grant</span></p>
				<time className="f6 db gray">Nov. 19, 2016</time>
			</article>
			<article className="pv4 bb b--black-10 ph3 ph0-l">
				<div className="flex flex-column flex-row-ns">
					<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
						<h1 className="f3 athelas mt0 lh-title">
							‘We Couldn’t Believe Our Eyes’: A Lost World of Vinyl Is Found
						</h1>
						<p className="f5 f4-l lh-copy athelas">
							Archaeologists have found more than 40 tons of vinyl records,
							some more than a five years old, shedding light on early hipster
							trends.
						</p>
					</div>
					<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
						<img src="http://mrmrs.github.io/photos/warehouse.jpg" className="db" alt="" />
					</div>
				</div>
				<p className="f6 lh-copy gray mv0">By <span className="ttu">Imelda Clancy</span></p>
				<time className="f6 db gray">Nov. 19, 2016</time>
			</article>
			</section>
	</>
	)
}

export default Home