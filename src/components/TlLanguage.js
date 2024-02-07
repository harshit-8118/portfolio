const langs = ["C", "C++", "Python"];

function TlLanguage() {
  return (
    <div className="ToolLanguages">
      <h1 className="font-alegreya text-base xxs:text-xl group-hover:text-[#004b4b] font-bold">
        PROGRAMMING LANGUAGES
      </h1>
      <div data-aos="zoom-in" data-aos-duration="400">
        {langs.map((lang, ind) => (
          <li
            className="font-roboto text-sm xxs:text-lg group-hover:underline underline-offset-4 decoration-[#055959]"
            key={ind}
          >
            {lang}
          </li>
        ))}
      </div>
    </div>
  );
}

export default TlLanguage;
