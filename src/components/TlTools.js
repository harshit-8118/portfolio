const tools = ["git", "vscode", "postman"];

function TlTools() {
  return (
    <div className="ToolTechs">
      <h1 className="font-alegreya text-base xxs:text-xl group-hover:text-[#fff] font-bold">TOOLS WHICH I USED..</h1>
      <div data-aos='zoom-in' data-aos-duration="400" data-aos-offset="100">
        {tools.map((tool, ind) => (
          <li
            className="font-roboto text-sm xxs:text-lg group-hover:underline underline-offset-4 decoration-[#fff]"
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
