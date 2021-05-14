import React from 'react'
import './FourthSection.css'
import circularlogo from './circularlogo.png'
const FourthSection = () => {
    return (
        <div className="sectionfour">  
                      <h2 className="head">Buissness Support</h2>
        <div className="containerthree">
            <div className="ld">
            <h3 className="pitching">Pitching &amp; Term Sheet</h3>
                <p className="pitchingpara">After Support From our team in respects to Financial points creation associated with running your buissness and creating your buissness plan for the same, we prepare and provide the core guidance in understanding funding processes and stages.</p>
                <button className="button2 btn1">Know More</button>
            </div>
            <div className="rd">
               <img className="circularlogo2" src={circularlogo} alt="Circular logo"/>
            </div>
        </div>
        </div>
    )
}

export default FourthSection
