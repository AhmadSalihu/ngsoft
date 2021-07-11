import React from 'react'
import { useLocation } from 'react-router-dom'
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as SiIcons from 'react-icons/si';


import Ngsoftlogo from "../assets/ngsoftlogo.jpg"

import './footer.styles.css';

const Footer = () => { 
		const location = useLocation();
 
  return (
    <>
      {
        location.pathname === "/"  && (
      <footer className="footer">
      <div className="footer-left">
        <img className="logo" src={Ngsoftlogo} alt="NgSoft" />
        <div className="socials">
          <a href='/'><GrIcons.GrFacebook className="gr" /></a>
          <a href='/'><FaIcons.FaTwitterSquare className="fa" /></a>
          <a href='/'><FaIcons.FaInstagramSquare className="fa" /></a>
          <a href='/'><FaIcons.FaWhatsappSquare className="fa" /></a>
          </div>
      </div>
      <ul className="footer-right">
        <li className="features">
          <h2 className="head-title">About Us</h2>
          <p>With almost a decades of immense contribution to the software technology, NGSoft has choose to maximize the time of people by, lessening the burden of the society, NgSoft has continuously remained a benchmark for excellence in Nigeria.</p>
        </li>        
        <li>
          <h2 className="head-title">Who We Are</h2>
          <ul className="box">
            <li><a href='/'>NGSoft at a glance</a></li>
            <li><a href='/'>NgSoft Board of Directors</a></li>
            <li><a href='/'>NgSoft Staff</a></li>
            <li><a href='/'>NgSoft Structure</a></li>
            <li><a href='/'>NgSoft Partners</a></li>
            <li><a href='/'>NgSoft Members</a></li>
          </ul>
        </li>
         <li>
          <h2 className="head-title">Our Location</h2>
          <h4>HEAD OFFICE</h4>
          <ul className="box">
            <p>Suite #GF5 Ground Floor, Bank of Industries Building Muhammadu Buhari Way, Kaduna</p>
            <p><MdIcons.MdCall className="md" />  +2348033033694</p>      
            <p><SiIcons.SiMailDotRu className="ri" />  ngsoft.ng@gmail.com</p>      
          </ul>
        </li>
      </ul> 
      <footer className="footer-bootom">
              <p>All right reserved &copy; by NgSoft{new Date().getFullYear()}</p>
      </footer>
      </footer>
      )
      }
      

    </>
  )
}

export default Footer;