import React from "react";
import TlLanguage from './TlLanguage'
import TlDevelopment from './TlDevelopment'
import TlDatabase from './TlDatabase'
import TlTools from './TlTools'

function TlToolsTechs() {
  return (
    <div className="ToolsContainer divide-y-2 divide-blue-300">
      <div className="ToolLanguages">
        <TlLanguage />
      </div>
      <div className="ToolDevelopment">
        <TlDevelopment />
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
