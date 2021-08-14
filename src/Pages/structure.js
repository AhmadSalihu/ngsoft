import React from 'react';
import './structure.css';


const Structure = () => {
	return (
		<>
		<article data-name="article-full-bleed-background">
  		<div className="cf" style={{ background: "url(https://image.shutterstock.com/image-vector/vector-realistic-black-brick-wall-260nw-609111539.jpg) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns white black-60 f3 times">
      <header className="bb pv4">
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir ngsoft">Our Structure</h3>
        <h4 className="f3 fw4  w-50-ns i lh-title mt0">Earlier on in 2018, <strong className="ng">NGSoft</strong> restructured itself's into various software development units in order to deliver improved products and services to its customers. The various sectors are listed below, and are still inprogress.</h4>
          </div>        
      </header>
    	</div>
  	</div>
      </article>
      <div data-aos="zoom-out-down">
        <h1 className="htag tc">OUR SERVICES</h1>
      </div>
      <div className="dt col-2 dt--fixed">
        <div className="dtc tc pv4 bg-black-10">
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
          <h2 className="f3 col1">Software Development</h2> <br />
          <p className="white tc f5">
            NGSoft Develops Software Products for Various Services and Sectors. Such As: Home Manager, Maxiland and Smart Housing for the Home Property Sub Sector, Smart Motoring Consisting of NVreg.ng for Vehicles Registrations, E-TMS.ng for Electronic Traffic Management and NVMS.ng for General Vehicles Management Services as well as Safejoni.ng for Commuter Administration. NGSoft Equally are the Innovators of mfbankng Smart Banking, Avatech.ng Smart- Market Delivery System and Smart- Pay a QR Payment System and Insuretech.ng a Smart- Risk Management. For The Public Sector We Developed and Deliver Smart- Govt, Smart-Revenues, Smart- Health and Smart Agric and Many More.  
          </p>
        </div>
      </div>
      <div className="dtc tc pv4 bg-black-05">
          <h2 className="col1 f3">Product Marketing</h2><br />
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <p className="f4 white">Our Products Marketing Modules and Systems Includes though not limited to; Social Media E-Marketing, Digital Marketing, Trade Shows and Products Bazaars, With Seminars, Conferences and Cross Promotions.
          </p>
      </div>
      </div>
      <div className="dtc tc pv4 bg-black-10">
          <h2 className="col1 f3">Admin and Finance</h2><br />
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
          <p className="white f4">Our Admin Services Includes; Client Support, Integrations Linkages, and Q & A Administrations </p>
      </div>
      </div>
  </div><br/>

	</>
	)
}

export default Structure;

