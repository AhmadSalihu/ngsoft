import React from 'react';
import './structure.css';


const Structure = () => {
	return (
		<>
		<article data-name="article-full-bleed-background">
  		<div className="cf" style={{ background: "url(https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80) no-repeat center center fixed", backgroundSize: "cover" }}>
    <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
      <header className="bb b--black-70 pv4">
        <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir ngsoft">Our Structure</h3>
        <h4 className="f3 fw4 i lh-title mt0">Earlier on in 2018, <strong>NGSoft</strong> restructured itself's into various software development units in order to deliver improved products and services to its customers. The various sectors are listed below, and are still inprogress.</h4>
      </header>
    	</div>
  	</div>
		</article>
	<section className="mw7 center avenir">
  <h2 className="baskerville fw1 ph3 ph0-l">News</h2>
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src="/ngsoftImages/Hm.jpeg" className="db" alt="home" />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 lh-title">HOME MANAGER</h1>
          <h3 className="i">THe Ultimate House Help</h3>      
          <p className="f6 f5-l lh-copy">
            The tech giant says it is ready to begin planning a quantum
            computer, a powerful cpu machine that relies on subatomic particles instead
            of transistors.
          </p>
        </div>
      </div>
    </a>
  </article>
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src="/ngsoftImages/rncsft.jpeg" className="db" alt="rentcosoft" />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 lh-title">Warehouse Prices Are Fast on the Rise</h1>
          <p className="f6 f5-l lh-copy">
            A warehouse is a commercial building for storage of goods.
            Warehouses are used by manufacturers, importers, exporters,
            wholesalers, transport businesses, customs, etc. They are
            usually large plain buildings in industrial areas of cities,
            towns and villages.
          </p>
        </div>
      </div>
    </a>
  </article>
  <article className="bb b--black-10">
    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
      <div className="flex flex-column flex-row-ns">
        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img src="/ngsoftImages/vreg.jpeg" className="db" alt="vreg" />
        </div>
        <div className="w-100 w-60-ns pl3-ns">
          <h1 className="f3 fw1 baskerville mt0 lh-title">Giant Whale Invests Huge Money to Build a Computer Out of Plankton</h1>
          <p className="f6 f5-l lh-copy">
            Whale is the common name for a widely distributed and diverse
            group of fully aquatic placental marine mammals. They are an
            informal grouping within the infraorder Cetacea, usually
            excluding dolphins and porpoises.
          </p>
        </div>
      </div>
    </a>
  </article>
</section>
	</>
	)
}

export default Structure;

