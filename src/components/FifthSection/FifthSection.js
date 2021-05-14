import React from 'react'
import cap1 from './cap1.png'
import cap2 from './cap2.png'
import cap3 from './cap3.png'
import cap4 from './cap4.png'
import cap5 from './cap5.png'
import cap6 from './cap6.png'
import cap7 from './cap7.png'
import cap8 from './cap8.png'
import './FifthSection.css'
const FifthSection = () => {
    return (
        <div className=" containerfour">
            <div className="card-deck container-fluid secondcontainer row">
                <div className="card col-lg-3 col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                   <img src={cap1} alt="cap1"/>
                </div>
                <div className="card col-lg-3 col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                   <img src={cap2} alt="cap1"/>
                </div>
                <div className="card col-lg-3 col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                   <img src={cap3} alt="cap1"/>
                </div>
                <div className="card col-lg-3 col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                   <img src={cap4} alt="cap1"/>
                </div>
            </div>
            <div className="card-deck container-fluid secondcontainer row">
                <div className="card col-lg-3 col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                   <img src={cap5} alt="cap1"/>
                </div>
                <div className="card col-lg-3 col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                   <img src={cap6} alt="cap1"/>
                </div>
                <div className="card col-lg-3 col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                   <img src={cap7} alt="cap1"/>
                </div>
                <div className="card col-lg-3 col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                   <img src={cap8} alt="cap1"/>
                </div>
            </div>
        </div>
    )
}

export default FifthSection
