import React, { useState } from 'react';
import soft from '../assets/soft3.jpg';
import './home.css';
// import Particles from "react-tsparticles"

let info = [
	{
	title: "Software Development",
	text: "NGSoft developes software Products for various services and sectors. such as; Home Manager, Maxiland and Smart Housing for the home property sub sector 	Smart motoring consisting of Nvreg.ng for vehicles registrations,	E-TMS.ng for electronic traffic management and NVMS.ng for general vehicles management services as well as Safejoni.ng for Commuter Administration. NGSoft equally are the Innovators of mfbankng Smart Banking, Smart-Risk Management. For The Public Sector We Developed and Deliver Smart- Govt, Smart-Revenues, Smart-Health and Smart Agric and Many More."
	},
	{
	title: "Product an Marketing",
	text: "Our products marketing modules and systems includes though not limited to; social media, e-marketing, digital marketing, trade shows and products bazaars, with seminars, conferences and cross promotions."
	},
	{
		title: "Admin and Finance",
	text: "Our admin services includes; client support, integrations linkages, and Q&A administrations"
	}
];

const Home = () => {
	const [showMore, setShowMore] = useState(false);
	return (
		<>
			<div>
				<article className="bg-white">
					<div className="ph4 ph5-m ph6-l bottom-top">
						<div data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500">
							<h1 className="row center text top htag">WHO WE ARE</h1>
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
						<div data-aos="fade-down-right">
							<h1 className="htag tc">OUR SERVICES</h1>
						</div>
						{info.map((message, index) => (
						<div  key={index}  data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500">
									<div className="dt dt--fixed">
								<div className="dtc tc bgc pv4 text row blck grow shadow-5">
									<h2 className="col1 f3">{message.title }</h2><br />
										<p className="f4">{showMore ? message.text : `${message.text.substring(0, 150)}...`}
											<button className="btn-style" onClick={() => setShowMore(!showMore)}>{showMore ? " lessinfo" : " Moreinfo"}</button> </p>
								</div>
								</div>
								</div>
							))}
						<section className="mw7 bottom-top center">
							<h1 className="row center htag">WHAT WE OFFER</h1>
							<div data-aos="fade-left">
								<article className="pv4 bt bb b--black-10 ph3 ph0-l">
									<div className="flex flex-column flex-row-ns">
										<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
											<h1 className="f3 athelas mt0 lh-title col1">RENT<span className="col2">CO</span><span className="col3">SOFT</span></h1>
											<p className="f5 f4-l lh-copy athelas">
												Digitalized housing rent systemRentcosoft provides an easy access to housing and estate within Kaduna metropolis						
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