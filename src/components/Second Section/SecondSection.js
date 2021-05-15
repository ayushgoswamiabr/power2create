import React,{ useEffect} from 'react'
import './SecondSection.css'
import pic1 from './pic 1.png'
import pic2 from './pic 2.png'
import pic3 from './pic 3.png'
import pic4 from './pic 4.png'
import pic5 from './pic 5.png'
import pic6 from './pic 6.png'
import pic7 from './pic 7.png'
import Aos from 'aos'
import "aos/dist/aos.css"
const SecondSection = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return (
        <div className="containerone">
        <h2 className="head">Power2Create</h2>
        <h2 className="head">Because we help building a rewarding business and one step IT solution.</h2>
        <div data-aos="fade-up" className="cardsarrange square">
            <div className="f1">
            <img className="shadow-lg p-3 mb-5 bg-body rounded" src={pic1} alt="pic 1"></img>
            <p>Business Planning</p>
            </div>
            <div className="f2">
            <img className="shadow-lg p-3 mb-5 bg-body rounded" src={pic2} alt="pic 2"></img>
            <p>Building a Legal Foundation</p>
            </div>
            <div className="f3">
            <img className="shadow-lg p-3 mb-5 bg-body rounded" src={pic3} alt="pic 3"></img>
            <p>Understanding Financial Basics</p>
            </div>
            <div className="f4">
            <img className="shadow-lg p-3 mb-5 bg-body rounded" src={pic4} alt="pic 4"></img>
            <p>Fundraising &amp; Valuation</p>
            </div>
        </div>
        <div data-aos="fade-up" className="cardsarrange2 square">
            <div className="f5">
            <img className="shadow-lg p-3 mb-5 bg-body rounded" src={pic5} alt="pic 5"></img>
            <p>Idea Identification &amp; Assessment</p>
            </div>
            <div className="f6">
            <img className="shadow-lg p-3 mb-5 bg-body rounded" src={pic6} alt="pic 6"></img>
            <p>Pitching &amp; Term Sheet</p>
            </div>
            <div className="f7">
            <img className="shadow-lg p-3 mb-5 bg-body rounded" src={pic7} alt="pic 7"></img>
            <p>Website  &amp; App Development</p>
            </div>
        </div>
    </div>
    )
}

export default SecondSection
