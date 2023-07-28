const langs = ["C", "C++", "javascript", "php"];

function TlLanguage() {
  return (
    <div className="ToolLanguages">
      <h1 className="font-alegreya text-base xxs:text-xl group-hover:text-[#fff] font-bold">PROGRAMMING LANGUAGES</h1>
      <div data-aos='zoom-in' data-aos-duration="400">
        {langs.map((lang, ind) => (
          <li className="font-roboto text-sm xxs:text-lg group-hover:underline underline-offset-4 decoration-[#fff]" key={ind}>{lang}</li>
        ))}
      </div>
    </div>
  );
}

export default TlLanguage;
