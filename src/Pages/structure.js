import React from 'react';
import './structure.css';
// import passion from '../assets/passion.jpg'
import boi from '../assets/boi.jpg'
import boi1 from '../assets/boi1.jpg'
import support from '../assets/support.jpg'

const Structure = () => {
	return (
		<>
		<article data-name="article-full-bleed-background opacity">
  		<div className="cf top" style={{ background: "url(https://image.shutterstock.com/image-vector/vector-realistic-black-brick-wall-260nw-609111539.jpg) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns white black-60 f3 times">
      <header className="bb pv4">
        <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir ngsoft">Our Structure</h3>
          <h4 className="f2 fw5  w-60-ns i lh-title white">Earlier on in 2020, <strong>NGSoft</strong> Restructured itself's into various software development units in order to deliver improved products and services to its customers. The various sectors are listed below, and are still inprogress.</h4>
          
         </div>        
        </header>    
         <div className="row bgs">
          <div className="col-2">
           <h1 className="tc white">Software Development</h1> 
           <div data-aos="fade-right">     
           <p className="f4 lh-copy white">
       We are into Digital Microcredit Mgt.  System, Land Admin System, Military & Police Digital Services, Agricultural Service Delivery System,
									Civil Serv. (Feds, State & Local). Health Care Mgt. SystemHome & Property Sales/Rental SystemDigital Promotions SystemVirtual Market ApplicationElectronic Vehicles Mgt. System Online Payment SystemRetirement Live SystemGeneric Revenue Aggregation Service System
									Insuretech Insurance Automated Delivery SystemDigital Scholarship and Studies System
          </p>
          </div>
          </div>
          <div className="col-1">
          <img src={boi} className="small-img" alt="" />              
          </div>      
          </div><br />    
         <div className="row bgs1">
          <div className="col-2">
          <h1 className="tc white">Product Marketing</h1> 
           <div data-aos="fade-right">     
           <p className="f3 lh-copy white">
           Our Products Marketing Modules and Systems Includes though not limited to; Social Media E-Marketing, Digital Marketing, Trade Shows and Products Bazaars, With Seminars, Conferences and Cross Promotions.
          </p>
          </div>
          </div>
          <div className="col-1">
          <img src={boi1} className="img-small" alt="" />              
          </div>      
          </div>   <br /> 
         <div className="row bgs2">
          <div className="col-2">
           <h1 className="tc white">Finace and Admin</h1>     
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
          <p className="f3">Our Admin Services Includes; Client Support, Integrations Linkages, and Q & A Administrations </p>
      </div>
          </div>
          <div className="col-1">
          <img src={support} className="img-small shadow-5" alt="" />              
          </div>      
          </div>    
          </div>
  	</div>
      </article>            

	</>
	)
}

export default Structure;

  //  < br />
  //       <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir ngsoft">Our Structure</h3>
	// 		<div className="dt col-2 dt--fixed">
  //       <div className="dtc tc pv4 grow shadow-3 blck">
  //         <div data-aos="fade-down"
  //           data-aos-easing="linear"
  //           data-aos-duration="1500">
  //           <h2 className="f3 col1">Software Development</h2> <br />
  //         <p className="tc f5">
  //           NGSoft Develops Software Products for Various Services and Sectors. Such As: Home Manager, Maxiland and Smart Housing for the Home Property Sub Sector, Smart Motoring Consisting of NVreg.ng for Vehicles Registrations, E-TMS.ng for Electronic Traffic Management and NVMS.ng for General Vehicles Management Services as well as Safejoni.ng for Commuter Administration. NGSoft Equally are the Innovators of mfbankng Smart Banking, Avatech.ng Smart- Market Delivery System and Smart- Pay a QR Payment System and Insuretech.ng a Smart- Risk Management. For The Public Sector We Developed and Deliver Smart- Govt, Smart-Revenues, Smart- Health and Smart Agric and Many More.  
  //         </p>
  //       </div>
  //     </div>
  //     <div className="dtc tc pv4 text row center blck grow shadow-5">
  //         <h2 className="col1 f3">Product Marketing</h2><br />
  //         <div data-aos="fade-down"
  //    data-aos-easing="linear"
  //    data-aos-duration="1500">
  //         <p className="f4">Our Products Marketing Modules and Systems Includes though not limited to; Social Media E-Marketing, Digital Marketing, Trade Shows and Products Bazaars, With Seminars, Conferences and Cross Promotions.
  //         </p>
  //     </div>
  //     </div>
  //     <div className="dtc tc pv4 grow shadow-5 blck">
  //         <h2 className="col1 f3">Admin and Finance</h2><br />
  //         <div data-aos="fade-down"
  //           data-aos-easing="linear"
  //           data-aos-duration="1500">
  //         <p className="f4">Our Admin Services Includes; Client Support, Integrations Linkages, and Q & A Administrations </p>
  //     </div>
  //     </div>
  //     </div><br />