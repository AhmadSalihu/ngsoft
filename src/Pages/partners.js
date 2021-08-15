import React from 'react';
// import data from './partners.iata'
// import PartnersMap from './partnersMap';

import '../components/partners.css';

const img = [
  {
    src: "/partners/I1.jpg"
  },
  {
    src: "/partners/I2.jpg"
  },
  {
    src: "/partners/I3.jpg"
  },
  {
    src: "/partners/I4.jpg"
  },
  {
    src: "/partners/I5.jpg"
  },
  {
    src: "/partners/I6.jpg"
  },
  {
    src: "/partners/I7.jpg"
  },
  {
    src: "/partners/I8.jpg"
  },
  {
    src: "/partners/I9.jpg"
  },
  {
    src: "/partners/I10.jpg"
  },
  {
    src: "/partners/I11.jpg"
  },
  {
    src: "/partners/I12.jpg"
  },
  {
    src: "/partners/I13.jpg"
  },
  {
    src: "/partners/I4.jpg"
  },
  {
    src: "/partners/I5.jpg"
  },
  {
    src: "/partners/I6.jpg"
  },
  {
    src: "/partners/I17.jpeg"
  },
  {
    src: "/partners/I18.jpeg"
  },
  {
    src: "/partners/I19.jpeg"
  },
  {
    src: "/partners/I20.jpeg"
  },
  {
    src: "/partners/I21.jpeg"
  },
  {
    src: "/partners/I22.jpeg"
  },
  {
    src: "/partners/I23.jpeg"
  },
  {
    src: "/partners/I24.jpeg"
  },
]



const Partners = () => {
  return (
    <div className="top">
    <div className="htag tc col-1">Our partners</div>
    <section className="cf w-70  row center pa2-ns">
       {
        img.map((image, i) => (
      <article className="fl w-100 w-50-m w-25-ns pa2-ns">
      <div key={i} className="aspect-ratio aspect-ratio--1x1">
      <img src={image.src} alt="" 
        className="db bg-center cover aspect-ratio--object" />    
      </div>
    </article>
        ))      
        }
    </section>
   </div>
	)
}

export default Partners;
