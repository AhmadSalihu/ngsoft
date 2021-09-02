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

const cardData = [
	{
		id: 1,
		name: "Smart Health",
		title: "MediCard",
		subTitle: "Health Care management System",
		text: "Card",
		src: "/ngsoftImages/MediCard01.png"
	},
	{
		id: 2,
		name: "Smart Farm",
		title: "AgriCard",
		subTitle: "A Digitalized farm managemeng system",
		text: "Card",
		src: '/ngsoftImages/AGRICARD2.png'
	},
	{
		id: 3,
		name: "Smart Banking",
		title: "MFBanking",
		subTitle: "A Digitalized microfinance  system",
		text: "Card",
		src: '/ngsoftImages/Mfbank.png'
	},
	{
		id: 4,
		name: "Smart Travel",
		title: "SafeJoni Card",
		subTitle: "Travel made easy with smart travel card",
		text: "Card",
		src: 'ngsoftImages/SafeJ.png'
	},
	{
		id: 5,
		name: "Smart Motoring",
		title: "EVMS",
		subTitle: "Electronic Vehicle Management Systems",
		text: "Card",
		src: '/ngsoftImages/vreg.png'
	},
	{
		id: 6,
		name: "Smart Gender",
		title: "PinkCard",
		subTitle: "Digital Gender Promotions",
		text: "Card",
		src: '/ngsoftImages/PinkCard.png'
	},
	{
		id: 7,
		name: "Smart Corps",
		title: "CommandCard",
		subTitle: "Digital Commercial Services",
		text: "Card",
		src: '/ngsoftImages/CommandCard.png'
	},
	{
		id: 8,
		name: "ServiCard",
		title: "LG Services",
		subTitle: "Digital LG Staff Management Sysytem",
		text: "Card",
		src: '/ngsoftImages/ServiCard3.png'
	},
	{
		id: 9,
		name: "Smart School",
		title: "Campos Card",
		subTitle: "Digital Studies System",
		text: "Card",
		src: '/ngsoftImages/conflunce.png'
	},
]

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
									NGSoft is an Emerging Software Development Company That Provides Optimum Services Delivery, Cutting Edge Software Solutions, Helping Public Sector Operators, Private Companies and Enterprises with Systems, Packages and Solutions. That Always Emerge During Their Digital Evolution Journey. We are into Optimal Operations Virtualizations, Digitalizations and Automations of Processes. <br />

						</p>
							</div>
						</div>
						<article className="bg-white bottom-top">
							<div data-aos="fade-left">
								<div className="vh-75 cover bg-center" style={{ backgroundImage: `url(${soft})` }}>
								</div>
							</div>
						</article>
							<div className="ph4 ph5-m ph6-l">
						<div data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500">
							<h1 className="row center text top htag">WHAT WE DO</h1>
							<div data-aos="zoom-in-up">	
							<div className="row center text">
								<p>
										We are into Digital Microcredit Mgt.  System, Land Admin System, Military & Police Digital Services, Agricultural Service Delivery System,
										Civil Serv. (Feds, State & Local). Health Care Mgt. SystemHome & Property Sales/Rental SystemDigital Promotions SystemVirtual Market ApplicationElectronic Vehicles Mgt. System Online Payment SystemRetirement Live SystemGeneric Revenue Aggregation Service System
										Insuretech Insurance Automated Delivery SystemDigital Scholarship and Studies System
									 <br />
						</p>
							</div>
							</div>
						</div>
						</div> <br />
						<div data-aos="fade-down-right">
							<h1 className="htag tc top">OUR SERVICES</h1>
						</div>
						{info.map((message, index) => (
						<div  key={index}  data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500">
									<div className="dt dt--fixed">
								<div className="dtc tc pv4 text row blck grow shadow-5">
									<h2 className="col1 f3">{message.title }</h2><br />
										<p className="f4">{showMore ? message.text : `${message.text.substring(0, 150)}...`}
											<button className="btn-style" onClick={() => setShowMore(!showMore)}>{showMore ? " lessinfo" : " Moreinfo"}</button> </p>
								</div>
								</div>
								</div>
							))}
								<br  />
						<h1 className="htag top tc">OUR PRODUCTS</h1>
						<div data-aos="zoom-in-left">
						<div className="shadow-5">
							<ul>
								<div className="containers center row">
								{
									cardData.map((card) => (
										<li key={card.id}>
												<div className="flex row gap">
												<img src={card.src} className="w-100 grow" alt={card.name} />
											</div>
										</li>
									))
								}
								</div>
							</ul>
						</div>
					</div>
									<br />
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
							<div data-aos="fade-left">
								<article className="pv4 bb b--black-10 ph3 ph0-l">
									<div className="flex flex-column flex-row-ns">
										<div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
											<h1 className="f3 athelas mt0 lh-title c1">Mx
										<span className="cl1">Land	</span></h1>
											<h3 className="f4 athela lh-title cl2 i">Kaduna State Online Vehicle Registration</h3>
											<p className="f5 f4-l lh-copy athelas">
												Digitalized Vehicle Registration System <br />
						 						from the comfort of your home.
										</p>
										</div>
										<div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
											<img src="/ngsoftImages/mxlnd.jpeg" className="db" alt="" />
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