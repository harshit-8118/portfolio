import React from "react";
const langs = ["C", "C++", "javascript", "php"];

function TlLanguage() {
  return (
    <div className="ToolLanguages">
      <h1 className="text-base xxs:text-xl group-hover:text-[#004b4b] font-bold">PROGRAMMING LANGUAGES</h1>
      <div data-aos='zoom-in' data-aos-duration="400">
        {langs.map((lang, ind) => (
          <li className="text-sm xxs:text-lg group-hover:underline underline-offset-4 decoration-[#055959]" key={ind}>{lang}</li>
        ))}
      </div>
    </div>
  );
}

export default TlLanguage;
