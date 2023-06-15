import React from 'react'
import { javascript, cpp, php } from '../assets/Img/images'
const images = [
  cpp, javascript, php
]

function TlLanguage() {
  return (
    <div className="ToolsContainer">
    <div className="ToolLanguages">
      {images.map((img) => (
          <img className="ToolsImg" key={img} src={img} alt={`${img}Img.png`} />
        ))}
    </div>
  </div>
  )
}

export default TlLanguage
