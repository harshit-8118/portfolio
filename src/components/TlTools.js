import React from 'react'
import { vscode, git } from '../assets/Img/images'
const images = [ git, vscode]

function TlTools() {
  return (
      <div className="ToolTechs">
        {images.map((img) => (
          <img key={img} className="ToolsImg" src={img} alt={`${img}Img.png`} />
        ))}
      </div>
  )
}

export default TlTools
