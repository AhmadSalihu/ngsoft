import React from 'react';
import '../components/partners.css';
import AG from '../assets/partners/ag.jpeg';
import Veritas from '../assets/partners/veritas.jpeg';
import Guinea from '../assets/partners/guinea.jpeg';
import Noor from '../assets/partners/noor.jpeg';
import Nicon from '../assets/partners/nicon.jpeg';
import Royal from '../assets/partners/royal.jpeg';
import Salam from '../assets/partners/salam.jpeg';
import UIN from '../assets/partners/uin.jpeg';



const Partners = () => {
  return (
    <article className="cf">
      <h1 className="title-partner">Our Partners</h1>
  <div className="fl w-50 w-25-ns">
    <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
      <img src={AG} alt="" title="A@G"  className="bg-center cover aspect-ratio--object" />
    </a>
  </div>
  <div className="fl w-50 w-25-ns">
    <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
      <img  src={Veritas} alt='/'   className="bg-center cover aspect-ratio--object" title="Veritas" />
    </a>
  </div>
  <div className="fl w-50 w-25-ns">
    <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
      <img src={Royal} alt="" className="bg-center cover aspect-ratio--object" title="Royal Exchange" />
    </a>
  </div>
  <div className="fl w-50 w-25-ns">
    <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
      <img src={Noor} alt="" className="bg-center cover aspect-ratio--object" title="Noor Takaful" />
    </a>
    </div>
    <br />  
    <br />  
  <div className="fl w-25-ns">
    <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
      <img  src={UIN}  className="bg-center cover aspect-ratio--object"  alt="/" title="Universal Insurance" />
    </a>
  </div>
  <div className="fl w-50 w-25-ns">
    <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
      <img src={Salam} alt=""  className="bg-center cover aspect-ratio--object" title="Salam Takaful" />
    </a>
  </div>
  <div className="fl w-100 w-25-ns">
    <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
      <img src={Guinea} className="bg-center cover aspect-ratio--object" title="Guinea" />
    </a>
  </div>
  <div className="fl w-50 w-25-ns">
    <a href="/#" className="db aspect-ratio aspect-ratio--1x1 dim">
      <img src={Nicon} alt="" className="bg-center cover aspect-ratio--object" title="Nicon Insurance" />
    </a>
      </div>
    </article>
	)
}

export default Partners;
