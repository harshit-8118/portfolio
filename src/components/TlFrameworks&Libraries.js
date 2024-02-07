const frame_libs = [
  "pytorch",
  "Scrapy",
  "Selenium",
  "BeautifulSoup",
  "scikit-learn",
  "Flask",
  "keras",
  "numpy",
  "pandas",
  "seaborn",
];

function TlFrameworks_Libraries() {
  return (
    <div className="ToolDevelopment">
      <h1 className="text-base xxs:text-xl group-hover:text-[#004b4b] font-bold font-alegreya">
        FRAMEWORKS & LIBRARIES
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-duration="400"
        className="flex justify-center space-x-4 xxs:space-x-14 text-lg flex-wrap leading-10"
      >
        {frame_libs.map((techs, ind) => (
          <li
            className="font-roboto text-sm xxs:text-lg group-hover:underline underline-offset-4 decoration-[#055959]"
            key={ind}
          >
            {techs}
          </li>
        ))}
      </div>
    </div>
  );
}

export default TlFrameworks_Libraries;
