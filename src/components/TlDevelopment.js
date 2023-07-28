const webTechs = [
  "html",
  "css",
  "javascript",
  "bootstrap",
  "react",
  "express",
  "nodejs",
  "firebase",
  "jquery",
  "tailwind",
];

function TlDevelopment() {
  return (
    <div className="ToolDevelopment">
      <h1 className="text-base xxs:text-xl group-hover:text-[#fff] font-bold font-alegreya">WEB TECHNOLOGIES</h1>
      <div data-aos='zoom-in' data-aos-duration="400" className="flex justify-center space-x-4 xxs:space-x-14 text-lg flex-wrap leading-10">
        {webTechs.map((techs, ind) => (
          <li className="font-roboto text-sm xxs:text-lg group-hover:underline underline-offset-4 decoration-[#fff]" key={ind}>{techs}</li>
        ))}
      </div>
    </div>
  );
}

export default TlDevelopment;
