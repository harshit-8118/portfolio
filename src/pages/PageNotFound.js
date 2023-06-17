import React from "react";
import { oops } from "../assets/Img/images";

function PageNotFound() {
  return (
    <div className="">
      <div className="h-14"></div>
      <img  className="w-120 h-72 xss:h-96 mx-auto" src={oops} />
      <div className="text-6xl antialiased font-bold font-sans text-center">Page Not Found....</div>
    </div>
  );
}

export default PageNotFound;
