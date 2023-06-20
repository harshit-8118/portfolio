import React from "react";
import Header from "./Header";
import Animate from "./Animate";

const name = "HARSHIT";
const specimen = 'A coder and web developer'


function Landing() {
  return (
    <div className="">
    <div id="landingpage" className="relative top-24 landing-page w-[100%] min-w-[10rem]"> 
      <div className="landingDesc">
        <div className="desc-heading" data-aos="fade-left" data-aos-duration="200">
          Hi, I am <Animate Name={name} jump={50} offset={120} duration={10}/>
        </div>
        <div className="desc-para text-[#02322c] font-semibold" data-aos="fade-up" data-aos-duration="200" data-aos-offset="70">
          <Animate Name={specimen} jump={40} offset={100} duration={30} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Landing;
