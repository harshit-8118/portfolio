import React from "react";
const tools = ["git", "vscode"];

function TlTools() {
  return (
    <div className="ToolTechs">
      <h1 className="text-base xxs:text-xl group-hover:text-[#004b4b] font-bold">TOOLS WHICH I USED..</h1>
      <div data-aos='zoom-in' data-aos-duration="400" data-aos-offset="100">
        {tools.map((tool, ind) => (
          <li
            className="text-sm xxs:text-lg group-hover:underline underline-offset-4 decoration-[#055959]"
            key={ind}
          >
            {tool}
          </li>
        ))}
      </div>
    </div>
  );
}

export default TlTools;
