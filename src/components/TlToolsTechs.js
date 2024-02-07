import TlLanguage from "./TlLanguage";
import TlDevelopment from "./TlDevelopment";
import TlDatabase from "./TlDatabase";
import TlTools from "./TlTools";
import TlFrameworksLibraries from "./TlFrameworks&Libraries";

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
        <TlFrameworksLibraries />
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
