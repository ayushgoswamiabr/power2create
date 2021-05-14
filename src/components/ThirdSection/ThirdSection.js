import React from 'react'
import './ThirdSection.css'
import circularlogo from './circularlogo.png'
const ThirdSection = () => {
    return (
            <div className="sectionthree">
            <h2 className="head">IT Support</h2>
            <div className="containertwo">
                    <div className="fh">
                    <h3 className="wordpress">Wordpress</h3>
                     <p className="wordpresspara">Wordpress is a free platform for people who want to write and publish their blogs but don't know how to code. It is a top platform to easily make websites without knowing a singlw word to code</p>
                         <button className="wordpressbutton btn1">Know More</button>

                    </div>
                    <div className="lh">
                    <img className="circularlogo" src={circularlogo} alt="Circular logo"/>
                    </div>
                    </div>
            </div>
    )
}

export default ThirdSection
