import React from "react";
import { Button } from "react-bootstrap";
import "./Banner.css";

function Baner() {
  return (
    <section>
      <div className="row">
        <div className="col-md-6">
          <h1 className="l">
            YOUR <span>DREAM HOUSE</span> FOR RENT
          </h1>

          <h3 className="k">HOME FEATURES</h3>
          <h6 className="jl">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna <br />{" "}
            aliqua. Ut enim ad minim veniam, quis. <br />{" "}
          </h6>
        </div>

        <div className="col-md-6">
          <img
            className="mm"
            src="https://1.bp.blogspot.com/-RZUTqQ2F50E/XsyHfUXnQoI/AAAAAAAAAh8/diCOvUJcvMARMUrD6cfyH_Xi-prRbtw-gCLcBGAsYHQ/w1200-h630-p-k-no-nu/contemporary-home-design-kerala.jpg"
            alt=""
          />
        </div>

        <div className="row">
          <div className="col-md-4 ">
            <ul className="jk">
              <li>Sitout</li>
              <li>6 Bedroom</li>
              <li>2 Living Room</li>
              <li>4 Bathroom</li>
              <li> Kitchen</li>
              <li>Prime Location</li>
            </ul>

            <ol className="ll">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>

            <ol className="lg">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </div>
          <div className="col-md-4 ">
            <img
              className="nn"
              src="https://www.shilpakalainteriors.in/images/gallery/Home/Living/L(5).jpg"
              alt=""
            />
          </div>
          <div className="col-md-4 ">
            <img
              className="bb"
              src="https://5.imimg.com/data5/ANDROID/Default/2020/8/IW/MQ/FO/59007013/product-jpeg-1000x1000.jpeg"
              alt=""
            />
          </div>

          
         
           
           
        
        
          
        </div>
      </div>
    </section>
  );
}

export default Baner;
