import React from "react";
import logo from "../Navbar/logo.svg";
import "./FirstSection.css";
import logo1 from "./logo 1.png";
import logo2 from "./logo 2.png";
import logo3 from "./logo 3.png";
import leftarrow from "./left arrow.png";
import play from "./play.png";
import rightarrow from "./right arrow.png";
const FirstSection = () => {
  return (
      <>
    <div className="containerfirst">
      <div className="firsthalf">
      <div className="lines">
        <p className="para1">Consultant Site Visit</p>
        <p className="para2">Entrepreneur Ideas Centric Assessment</p>
        <p className="para3">Dedicated Skilled Team</p>
      </div>
        <div className="logos">
          <img className="logo" src={logo1} alt="logo 1" />
          <img className="logo2 logo" src={logo2} alt="logo 2" />
          <img className="logo" src={logo3} alt="logo 3" />
        </div>
      </div>
      <div className="secondhalf">
          <img className="logo" src={logo} alt="logo" />
          <h2 className="heading">Power 2 Create</h2>
          <p>
            We are startup incubator, and we guide young companies and teach
            them the art of business. Our company's mission is to raise
            fledgling companies and make them industry leaders.
          </p>
          <button className="btn1">Get a free Quote</button>
           
     <div className="services">
      <img className="play" src={play} alt="play" />
     <p className="look">Have a look at our services</p>
          </div>
        </div>
    </div>
    <div className="bt">
      <div style={{marginLeft:'50px'}} className="firsthalf">
      <img src={leftarrow} alt="left arrow" />
      <p style={{fontWeight:'bold'}}>Other Projects</p>
      </div>
      <div style={{marginRight:'10px'}} className="secondhalf2">
      <img src={rightarrow} alt="rightarrow" />
      <p style={{fontWeight:'bold'}}>Health2Offer Gym</p>
      <p>A fitness destination in Model Town</p>
      </div>
    </div>
    </>
  );
};

export default FirstSection;
