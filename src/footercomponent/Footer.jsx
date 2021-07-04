import React from 'react'
import { useLocation } from 'react-router-dom'
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';

import Ngsoftlogo from "../assets/ngsoftlogo.jpg"

import './footer.styles.css';

const Footer = () => { 
		const location = useLocation();
 
  return (
    <>
      {
        location.pathname === "what__we_do"  && null (
      <footer className="footer">
      <div className="footer-left">
        <img className="logo" src={Ngsoftlogo} alt="Ngsoft" />
        <div className="socials">
          <a href='/'><GrIcons.GrFacebook className="gr" /></a>
          <a href='/'><FaIcons.FaTwitterSquare className="fa" /></a>
          <a href='/'><FaIcons.FaInstagramSquare className="fa" /></a>
          <a href='/'><FaIcons.FaWhatsappSquare className="fa" /></a>
          </div>
      </div>
        <ul className="footer-right">
        <li>
          <h2>Our Out Reach</h2>
          <ul className="box">
            <li><a href='/'>Ngsoft Ghana</a></li>
            <li><a href='/'>Ngsoft South Africa</a></li>
            <li><a href='/'>Ngsoft Kenya</a></li>
            <li><a href='/'>Ngsoft Kenya</a></li>
            <li><a href='/'>Ngsoft Kenya</a></li>
            <li><a href='/'>Ngsoft Kenya</a></li>
            <li><a href='/'>Ngsoft Kenya</a></li>
          </ul>
        </li>
        <li className="features">
          <h2>Ngsoft Office</h2>
          <ul className="box">
            <li><a href='/vendor'>Vendor register</a></li>
            <li><a href='/dashboard'>Vendor DashBord</a></li>
            <li><a href='/vendor_login'>Vendor Login</a></li>
          
          </ul>
        </li>
         <li>
          <h2>Partners</h2>
          <ul className="box">
            <li><a href='/signup'>Customer register</a></li>
            <li><a href='/signin'>Sign In</a></li>
            <li><a href='/sidebar'>User DashBord</a></li>
          </ul>
        </li>
      </ul> 
      <footer className="footer-bootom">
              <p>All right reserved &copy; by Ngsoft{new Date().getFullYear()}</p>
      </footer>
      </footer>
        )
      }
      

    </>
  )
}

export default Footer;