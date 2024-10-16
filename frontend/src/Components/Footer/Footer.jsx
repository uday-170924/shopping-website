import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instragram from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <a href="https://www.instagram.com/srinath.munichandra/" target="_blank"><img src={instragram} alt="" /></a>
        </div>
        <div className="footer-icon-container">
           <a href="https://www.youtube.com/channel/UCu9teeBAfCNO-Uio_7MCd-Q" target="_blank"><img src={pintester_icon} alt="" /></a> 
        </div>
        <div className="footer-icon-container">
             <a href="whatsapp://send?abid=8523922562&text=Hello%2C%20Srinath!" target="_blank"><img src={whatsapp_icon} alt="" /> </a> 
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer