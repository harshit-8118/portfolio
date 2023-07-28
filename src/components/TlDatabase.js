const dbs = ["MySql", "MongoDB"];

function TlDatabase() {
  return (
    <div className="ToolDatabase">
      <h1 className="text-base xxs:text-xl group-hover:text-[#fff] font-bold font-alegreya">DATABASES</h1>
      <div data-aos='zoom-in' data-aos-duration="400">
        {dbs.map((db, ind) => (
          <li className="text-sm xxs:text-lg group-hover:underline underline-offset-4 decoration-[#fff] font-roboto" key={ind}>{db}</li>
        ))}
      </div>
    </div>
  );
}

export default TlDatabase;
