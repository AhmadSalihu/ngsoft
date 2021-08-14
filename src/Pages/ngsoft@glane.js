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
              <p className="pa2 tc f4">NGSoft service believes in and pursues an excellent service culture.</p><br />
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
     <strong className="f3"><span className="ng">NG<span className="soft">Soft </span></span></strong> believes in excellence  service delivery, and has  pursue an excellent service culture, and delivers an optimum services throughout Kaduna state and Nigeria at large using the best <strong>software technology</strong>.          
  </p>
</article>
<article className="pa3 pa5-ns">
  <h1 className="ng  txtcut">NG<span className="soft">Soft</span></h1>
  <div data-aos="fade-down-left">
            
  <p className="measure lh-copy">
   With over a decade of immense contribution to the Information and Communication Technology sector, NGSoft service has continuously remained a benchmark for excellence in Nigeria. The company commenced operations in Kaduna State Nigeria, on September 26th 2018. We form partnership with  Kaduna state Board of Internal Revenue(KADRIS), to managed the registration of vehicle and sutorenewal within Kaduna state metropolis.
  </p><br />
  </div>    
  <div data-aos="flip-down">
            
  <p className="measure lh-copy">
      In 2020,<strong className="f3"><span className="ng">NG<span className="soft">Soft </span></span></strong> was incorporated to coordinate and monitor the activities of  KADRIS and Home Management within Kaduna state.
  </p>
  </div>        
			</article>
	</div>		
	</>
	)
}

export default NgsoftGlance
