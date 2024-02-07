import TlLanguage from "./TlLanguage";
import TlDevelopment from "./TlDevelopment";
import TlDatabase from "./TlDatabase";
import TlTools from "./TlTools";
import TlFrameworks_Libraries from "./TlFrameworks&Libraries";

function TlToolsTechs() {
  return (
    <div className="ToolsContainer divide-y group-hover:divide-[#004b4b]">
      <div className="ToolLanguages">
        <TlLanguage />
      </div>
      <div className="ToolDevelopment">
        <TlDevelopment />
      </div>
      <div className="ToolDevelopment">
        <TlFrameworks_Libraries />
      </div>
      <div className="ToolDatabase">
        <TlDatabase />
      </div>
      <div className="ToolTechs">
        <TlTools />
      </div>
    </div>
  );
}

export default TlToolsTechs;
