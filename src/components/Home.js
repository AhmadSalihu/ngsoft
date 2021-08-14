import React from 'react';
import soft from '../assets/soft3.jpg';
import './home.css';
import Particles from "react-tsparticles"


const Home = () => {
	return (
		<>
			<div>
				<article className="bg-white">
					
					{/* <div className="vh-75 cover bg-center" style={{ backgroundImage: "url(http://mrmrs.github.io/photos/001.jpg)" }} /> */}
					<div className="ph4 ph5-m ph6-l bottom-top">
						<div data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500">
							<h1 className="row center text htag">WHO WE ARE</h1>
							<div className="row center text">
								<p>
									We are a digital transformation software development company that provides optimum services delivery, cutting edge engineering software solutions, helping fortune  companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey. Since 2018 we have been a visionary and a reliable software engineering partner for world-className brands.
						</p>
							</div>
						</div>
						<article className="bg-white bottom-top">
							<div data-aos="fade-left">
								<div className="vh-75 cover bg-center" style={{ backgroundImage: `url(${soft})` }}>
								</div>
							</div>
						</article>
						<section className="mw7 center">
							<h1 className="row center htag">WHAT WE OFFER</h1>
							<div data-aos="fade-left">
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
							</div>
							<div data-aos="fade-left">
								<article className="pv4 bb b--black-10 ph3 ph0-l">
									<div className="flex flex-column flex-row-ns">
										<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
											<h1 className="f3 athelas mt0 lh-title cl1"><span className="cl2">HOME </span>MANAGER</h1>
											<h3 className="f4 athela lh-title cl2 i">The Ultimate House Help</h3><br />
											<p className="f5 f4-l lh-copy athelas">
												Digitalized Home Management System.<br />
								A Smart way of managing your home activities and repairs from your couch...
						</p>
										</div>
										<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
											<img src='/ngsoftImages/Hm.jpeg' className="db" alt="" />
										</div>
									</div>
								</article>
							</div>
							<div data-aos="fade-left">
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
							</div>
						</section>
					</div>
				</article>
			</div>
		</>
	)
};
export default Home;