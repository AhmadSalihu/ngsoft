import React from 'react';
import '../components/partners.css';
import data from './partners.data'
// import PartnersMap from './partnersMap';


const Partners = () => {
  return (
    <article>
			<h2 className="f3 fw4 pa3 mv0">Albums</h2>
			<div className="cf pa2">
        {
          data.map(({imgSrc, i}) => (
          <div key={i} className="fl w-50">
              <div class="pa4 tc">
        <img
            src={imgSrc}
            className="br4 h3 w3 dib" alt="avatar" />
      </div>
				</div>
          ))
        }
			</div>
		</article>

  //   <article className="cf">
  //     <h1 className="title-partner">Our Partners</h1>
  //   <div className="image-container">
  // <div className="fl w-50 w-25-ns">
  //   <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
  //     <img src={I1} alt="" title="A@G"  className="bg-center cover aspect-ratio--object" />
  //   </a>
  // </div>
  // <div className="fl w-50 w-25-ns">
  //   <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
  //     <img  src={I2} alt='/'   className="bg-center cover aspect-ratio--object" title="Veritas" />
  //   </a>
  // </div>
  // <div className="fl w-50 w-25-ns">
  //   <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
  //     <img src={Royal} alt="" className="bg-center cover aspect-ratio--object" title="Royal Exchange" />
  //   </a>
  // </div>
  // <div className="fl w-50 w-25-ns">
  //   <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
  //     <img src={Noor} alt="" className="bg-center cover aspect-ratio--object" title="Noor Takaful" />
  //   </a>
  //   </div>
  //   <br />  
  //   <br />  
  // <div className="fl w-25-ns">
  //   <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
  //     <img  src={UIN}  className="bg-center cover aspect-ratio--object"  alt="/" title="Universal Insurance" />
  //   </a>
  // </div>
  // <div className="fl w-50 w-25-ns">
  //   <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
  //     <img src={Salam} alt=""  className="bg-center cover aspect-ratio--object" title="Salam Takaful" />
  //   </a>
  // </div>
  // <div className="fl w-100 w-25-ns">
  //   <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
  //     <img src={Guinea} className="bg-center cover aspect-ratio--object" title="Guinea" />
  //   </a>
  // </div>
  // <div className="fl w-50 w-25-ns">
  //   <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
  //     <img src={Nicon} alt="" className="bg-center cover aspect-ratio--object" title="Nicon Insurance" />
  //   </a>
  //   </div>
  //   </div>
  //   </article>
	)
}

export default Partners;
