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
    about: "NGSoft Is Set for Design and Development Products and Services Targeted At The Digitization Of Processes, In The Commercial, Public And Social Subsectors. NGSoft Has Continuously Remained a Benchmark for Excellence InVehicular And Transportations, Governance And Finance, Home And Property As Well Various Social Services In Nigeria. We Have Since Set Scene For Expansion To English Speaking West And East African Countries In The Immediate Near Future."
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