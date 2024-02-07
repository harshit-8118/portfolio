const techs = [
  "html",
  "css",
  "javascript",
  "Php",
  "react",
  "express",
  "nodejs",
  "jquery",
  "bootstrap",
  "tailwind",
  "pytorch",
  "Flask",
];

function DevFramework() {
  return (
    <div className="ToolDevelopment">
      <h1 className="text-base xxs:text-xl group-hover:text-[#004b4b] font-bold font-alegreya">
        TECHNOLOGIES
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-duration="400"
        className="flex justify-center space-x-4 xxs:space-x-14 text-lg flex-wrap leading-10"
      >
        {techs.map((tech, ind) => (
          <li
            className="font-roboto text-sm xxs:text-lg group-hover:underline underline-offset-4 decoration-[#055959]"
            key={ind}
          >
            {tech}
          </li>
        ))}
      </div>
    </div>
  );
}

export default DevFramework;
