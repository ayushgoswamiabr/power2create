import React,{useEffect} from 'react'
import './Footer.css'
import facebook from './facebook1.png'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import youtube from './youtube.png'
import map from './map.png'
import Aos from 'aos'
const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
        <div data-aos="fade-right" className="containersix">
            <div className="ups">
                <div className="ls">
                <p>Subscribe to our newsletter for latest updates:</p>
                </div>
                <div className="rs">
                <input className="email" type="email" id="email" name="email" placeholder="Enter Email..."></input>
                <button className="btn1 emailbutton">Subscribe</button>
                </div>
            </div>
            <div className="downs">
                <div className="ls2">
                    <div className="up">
                    <p className="contact">Contact Us:</p>
                    <img src={map} alt='map'/>
                    </div>
                    <div className="mp">
                    <p>C-34, Ground Floor, Gali No.-4, Mahendru Enclave Delhi 110033, India</p>
                    </div>
                    <div className="lp">
                    <p>Sales: </p>
                    <p>+91 9311-465-556 +91 9311-986-663</p>
                    </div>
                </div>
                <div className="rs2">
            <p className="links">Useful Links:</p>

                <ul className="linksul">
                <li><a href='/'>Company Profile</a></li>
                <li><a href='/'>Disclaimer</a></li>
                <li><a href='/'>Contact Us</a></li>
                <li><a href='/'>Disclaimer</a></li>
                </ul>
                </div>
            </div>
            <div className="sm">
            <img src={linkedin} alt='linkedin'/>
            <img src={instagram} alt='instagram'/>
            <img src={facebook} alt='facebook'/>
            <img src={youtube} alt='youtube'/>
            </div>
            <p className="copyright">&copy; Copyright Power2Create 2020 P2L Impact Learning Empowers Pvt. Ltd. All Rights Reserved</p>   
         </div>
    )
}

export default Footer
