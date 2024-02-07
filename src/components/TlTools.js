const tools = ["git", "vscode", "postman", "Jupyter Notebook", "Colab"];

function TlTools() {
  return (
    <div className="ToolTechs">
      <h1 className="font-alegreya text-base xxs:text-xl group-hover:text-[#004b4b] font-bold">
        TOOLS
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-duration="400"
        data-aos-offset="100"
        className="flex justify-center space-x-4 xxs:space-x-14 text-lg flex-wrap leading-10"
      >
        {tools.map((tool, ind) => (
          <li
            className="font-roboto text-sm xxs:text-lg group-hover:underline underline-offset-4 decoration-[#055959]"
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
