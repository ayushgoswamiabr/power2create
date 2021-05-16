import React,{ useEffect} from 'react'
import './ThirdSection.css'
import circularlogo from './circularlogo.png'
import Aos from 'aos'
import "aos/dist/aos.css"
const ThirdSection = () => {
        useEffect(()=>{
                Aos.init({duration:2000})
              },[])
    return (
            <div data-aos="fade-down" data-aos-duration="3000" className="sectionthree">
            <h2 className="head">IT Support</h2>
            <div className="containertwo">
                    <div data-aos="flip-left" className="fh">
                    <h3 className="wordpresspara">Wordpress</h3>
                     <p className="wordpresspara">Wordpress is a free platform for people who want to write and publish their blogs but don't know how to code. It is a top platform to easily make websites without knowing a singlw word to code</p>
                         <button className="wordpressbutton btn1">Know More</button>

                    </div>
                    <div data-aos="flip-right" className="lh">
                    <img className="circularlogo" src={circularlogo} alt="Circular logo"/>
                    </div>
                    </div>
            </div>
    )
}

export default ThirdSection
