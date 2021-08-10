import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';


// import Ngsoftlogo from "../assets/ngsoftlogo.jpg"

import './footer.styles.css';

const info = 
  {
    about: "NGSoft is set for design and development Products and Services targeted at the Digitization of Processes, in the Commercial, Public and Social Subsectors. NGSoft has continuously remained a benchmark for excellence in Vehicular and Transportations, Governance and Finance, Home and Property as well various Social Services in Nigeria. We have Since set scene for expansion to English Speaking West and East African countries in the immediate near future."
  }


const Footer = () => { 
		const location = useLocation();
 
  return (
    <>
      {
        location.pathname === "/aboutpage" ? null : location.pathname === "/what_we_do" ? null :  (
      <footer className="footer">
        <div className="footer-left">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <img src="/ngsoftImages/companylogo.png" className="w-100 f5 measure" alt="outer space" />
     </div> 
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
        <div className="socials">
          <a href='/'><GrIcons.GrFacebook className="fcb" /></a>
          <a href='/'><FaIcons.FaTwitterSquare className="twt" /></a>
          <a href='/'><FaIcons.FaInstagramSquare className="ins" /></a>
          <a href='/'><FaIcons.FaWhatsappSquare className="wt" /></a>
        </div>        
      </div>
    </div>
      <ul className="footer-right">
        <li className="features">
          <h2 className="head-title">About Us</h2>
            <p>{info.about.substring(0, 200)}...
              <Link to="/aboutpage">read More</Link>
            </p>
        </li>        
        <li>
          <h2 className="head-title">Who We Are</h2>
          <ul className="box">
            <li><a href='/ngsoftglance'>NGSoft At A Glance</a></li>
            <li><a href='/boardmembers'>Board of Directors</a></li>
            <li><a href='/managemen'>Management</a></li>
            <li><a href='/ngsoftstaff'>NgSoft Staff</a></li>
            <li><a href='/structure'>Structure</a></li>
            <li><a href='/parners'>Partners</a></li>
          </ul>
        </li>
         <li>
          <h2 className="head-title">Our Location</h2>
          <h4>HEAD OFFICE</h4>
          <ul className="box">
            <p>Suite #GF5 Ground Floor, 
Bank of Industries Building, 
No 18 Muhammadu Buhari Way, 
Kaduna Nigeria
</p>
            <p><MdIcons.MdCall className="md" /> +2348033033694</p>      
            <p><SiIcons.SiMailDotRu className="ri" />  ngsoft.ng@gmail.com</p>      
          </ul>
        </li>
      </ul> 
      <footer className="footer-bootom">
              <p>All right reserved &copy; by NGSoft {new Date().getFullYear()}</p>
      </footer>
      </footer>
      )
      }
    </>
  )
}

export default Footer;