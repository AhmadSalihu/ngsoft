import React from 'react';
import './home.css';


const Home = () => {
	return (
		<>
		{/* <article data-name="article-full-bleed-background">
  <div className="cf" style={{ background: "url(https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
      <header className="bb b--black-70 pv4">
				<h4 className="f3 fw4 i lh-title mt0">We Believe in Having the Best in order to give you the best!
				</h4>
      </header>
      <section className="pt5 pb4">
        	<p className="times lh-copy measure f4 fw mt0">
						<span className="ng">NG</span><span className="soft">Soft</span> provides services delivery, IT infrastructure support and Digital smart home integration. Also, vehicle registration and services such as renewal of particulars, plate number licenese. Further more, <span className="ng">NG</span><span className="soft">Soft</span> provides online support for Farmers by delivering Agro-chemical support for farm produce. <br /> <span className="ng">NG</span><span className="soft">Soft</span> further provide smart digital services such as car wash, car repaire, microfinance bank and Housing rent and management etc. 40% of Housings, Estate, Car wash within Kaduna State are maintain and run under the <span className="ng">NG</span><span className="soft">Soft</span> platform.	<br /> <span className="ng">NG</span><span className="soft">Soft</span> also provides 40% of registered vehicles within Kaduna State.
        	</p>
      	</section>
    	</div>
  	</div>
	</article> */}
			<br />
			<br />
			<section className="mw7 center">
			<h2 className="athelas ph3 ph0-l">News</h2>
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
	</>
	)
}

export default Home;