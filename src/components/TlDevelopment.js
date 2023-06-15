import React from "react";
import {
  html,
  css,
  bootstrap,
  react,
  express,
  nodejs,
  jquery,
  tailwind,
} from "../assets/Img/images";

const images = [html, css, bootstrap, tailwind, react, express, nodejs, jquery];

function TlDevelopment() {
  return (
    <div className="ToolDevelopment">
      {images.map((img) => (
        <img key={img} className="ToolsImg" src={img} alt="htmlImg.png" />
      ))}
    </div>
  );
}

export default TlDevelopment;
