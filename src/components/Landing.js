import React from "react";
import Header from "./Header";

function Landing() {
  return (
    <>
    <div className="landing-page ">
      <div className="landingDesc">
        <div className="desc-heading">
          Hi, <br />
          I am Harshit
        </div>
        <div className="desc-para">
            Coder & Web Developer
        </div>
      </div>
      <div className="landingImg max-w-max min-w-min scale-150">
        <img src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" />
      </div>
    </div>
    </>
  );
}

export default Landing;
