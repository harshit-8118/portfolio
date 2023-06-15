import React from "react";
import { mongodb, mysql } from "../assets/Img/images";
const images = [mongodb, mysql];

function TlDatabase() {
  return (
    <div className="ToolDatabase">
      {images.map((img) => (
        <img key={img} className="ToolsImg" src={img} alt={`${img}Img.png`} />
      ))}
    </div>
  );
}

export default TlDatabase;
