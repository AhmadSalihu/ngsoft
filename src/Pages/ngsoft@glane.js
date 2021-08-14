import React from 'react'
import "../components/home.css"



const NgsoftGlance = (props) => {
  const routePath = () => {
    props.history.push('/partners');
  }
	return (
		<>
		<article data-name="">
  <div className="cf">
    <div className="flex pa3 pa4-nsblack-70 times bg-black">
      <header className="b--black-70 w-50-ns  white pv4">
              <div>
                 <h1 className="tc lh-copy"><strong className="f3"><span className="ng">NG<span className="soft">Soft </span></span></strong>  has continuously remained a benchmark for excellence in Nigeria.</h1>
              <p className="pa2 tc f4">NGSoft services believes in and pursues an excellent service culture.</p><br />
             </div>
      <button className="btn f3 pa2" onClick={routePath}>See Our partners</button> 
        {/* <h3 className="f2 fw7 tracked lh-title avenir ngsoft ng">NG<span className="soft">Soft</span><span className="at"></span> at a glance</h3>
        <h4 className="f3 fw4 i lh-title mt0"></h4> */}
      </header>
     </div> 
  	</div>
	</article>
			<br />
      <div className="fle bgc">
			<article className="pa3 pa5-ns">
        <div data-aos="fade-down-right">
  <img src="/ngsoftImages/companylogo.png" className="w-100 f5 measure" alt="outer space" />
    </div>
  <p className="measure lh-copy">
Over time, we have received a number of accolades from our partners, customers, media and professional bodies as a result of our service excellence and increased performance.
  </p>
  <p className="measure lh-copy">
     <strong className="f3"><span className="ng">NG<span className="soft">Soft </span></span></strong> believes in excellence  service delivery, and has  pursue an excellent service culture, and delivers its operations throughout Kaduna State and Nigeria at large using the best <strong>software technology</strong>.          
  </p>
</article>
<article className="pa3 pa5-ns">
  <h1 className="ng  txtcut">NG<span className="soft">Soft</span></h1>
  <div data-aos="fade-down-left">
            
  <p className="measure lh-copy">
   With over two decades of immense contribution to the Information and Communication Technology sector, NGSoft-Services has continuously remained a benchmark for excellence in Nigeria. The company commenced operations in Kaduna State Nigeria, on September 26th 2018 as Computer Warehouse Limited principally to cater for the hardware projects. In 1994, DCC Networks was established as the communication arm to provide VSAT, Metropolitan, Wide Area and Local area networks to corporate organizations. To concentrate on demands in the area of software solutions, system and training, the Expert Edge software was acquired in 1997
  </p><br />
  </div>    
  <div data-aos="flip-down">
            
  <p className="measure lh-copy">
      In 2020,<strong className="f3"><span className="ng">NG<span className="soft">Soft </span></span></strong> was incorporated to coordinate and monitor the activities of the three subsidiaries. Prior to this establishment, a branch in Ghana was set-up in 2003 to cater to the needs of the West African region. The Group Company was formed to provide Head Office functions and Shared Resources for the subsidiaries from a central point to make them leaner, efficient and more customer-focused. By 2012, CWG Plc merged with its three subsidiaries and this made the subsidiaries cease to exist as separate entities, rather as divisions. In pursuit of its Pan-African Vision, CWG Plc established other regional offices in East and Central Africa; CWG Uganda Limited (2010) and CWG Plc Cameroon Limited (2012) respectively to handle the business interest in these regions.
  </p>
  </div>        
			</article>
	</div>		
	</>
	)
}

export default NgsoftGlance
