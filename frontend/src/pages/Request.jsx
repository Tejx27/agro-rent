import React from "react";
import { Header, Sidebar } from "../components";
import "./Request.css";
import ToolImage from "../assets/Tool.png";
const Request = () => {
  return (
    <div className="main">
      <Header />
      <Sidebar />
      <div className="heading-content">
        <h1>Request owner</h1>
      </div>
      <div className="product-card">
  <div className="card-heading">
    <h2>Sickle</h2>
  </div>
  <div className="left-side-content">
    <div className="right-side-content">
      <div className="right-heading-content">
        <h3>BY Tejas Nikam</h3>
      </div>
      <div className="heading-content">
        <h3 className="price-content">250rs/day</h3>
      </div><br />
      <div className="tool-content-all">
      <div>
        <label>Description:</label><br />
        <p>This is a simple description.</p>
      </div>
      <div><br />
        <label>Till Date:</label><br />
        <input className="dateInput" type="date" /><br />
      </div>
      <div><br />
        <label>Message:</label><br />
        <textarea></textarea>
      </div>
      <div>
        <button className="btn">Send Request</button>
      </div>
    </div>
    <div className="img-section">
      <img className="img-content" src={ToolImage} alt="" />
    </div>
    </div>
    
  </div>
</div>


      {/* <div className='gradiants-background'>
            <div className="gradinat1">
                <div className="color1"></div>
                <div className="color2"></div>
                <div className="color3"></div>
            </div>
            <div className="gradinat2">
                <div className="color1"></div>
                <div className="color2"></div>
                <div className="color3"></div>
            </div>
            <div className="gradinat3">
                <div className="color1"></div>
                <div className="color2"></div>
                <div className="color3"></div>
            </div>
            </div> */}
    </div>
  );
};

export default Request;
