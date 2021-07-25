import React from 'react';
import './structure.css';


const Structure = () => {
	return (
		<>
		<article data-name="article-full-bleed-background">
  		<div className="cf" style={{ background: "url(https://image.shutterstock.com/image-vector/vector-realistic-black-brick-wall-260nw-609111539.jpg) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir ngsoft">Our Structure</h3>
        <h4 className="f3 fw4 i lh-title mt0">Earlier on in 2018, <strong>NGSoft</strong> restructured itself's into various software development units in order to deliver improved products and services to its customers. The various sectors are listed below, and are still inprogress.</h4>
      </header>
    	</div>
  	</div>
      </article>
    <div className="dt dt--fixed">
      <div className="dtc tc pv4 bg-black-10">
          <h2 className="f3 col1">Software Development</h2> <br />
          <p className="white f4">NgSoft Developed various software products which are used to carry out various services such as Home management, Smart Banking, Smart Agric, Smart Card, Smart Housing, KadVReg an others.
           </p><br />
          <p className="f3 col1">

          </p>
      </div>
      <div className="dtc tc pv4 bg-black-05">
          <h2 className="col1 f3">Product Marketing</h2><br />
          <p className="f4 white">Our Marketing Products Includes; E-Marketing, Digital Marketing, Threat Shows/Bazaar, Seminars/Conferences and Cross Promotions.
          </p>
      </div>
      <div className="dtc tc pv4 bg-black-10">
          <h2 className="col1 f3">Admin and Finance</h2><br />
          <p className="white f4">Our Admin Services Includes; Client Site Support, Integratipn Linkages, and Q&A </p>
      </div>
  </div>

	</>
	)
}

export default Structure;

