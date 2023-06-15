import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faLanguage,
  faLaptopCode,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

// tt => tooltechnology

function ToolTechnology() {
  return (
    <>
      <ul className="ttnavigation">
        <Link to={""} className="tticons flex justify-center space-x-4">
          <p className="icon">
            <FA icon={faLanguage} />
          </p>
          <p className="ttheading">Languages</p>
        </Link>
        <Link
          to={"home/dev-techs"}
          className="tticons flex space-x-4 justify-center"
        >
          <p className="icon">
            <FA icon={faCode} />
          </p>
          <p className="ttheading">Technologies</p>
        </Link>
        <Link
          to={"home/dbs-techs"}
          className="tticons flex space-x-4 justify-center"
        >
          <p className="icon">
            <FA icon={faDatabase} />
          </p>
          <p className="ttheading">Databases</p>
        </Link>
        <Link
          to={"home/tools"}
          className="tticons flex space-x-4 justify-center"
        >
          <p className="icon">
            <FA icon={faScrewdriverWrench} />
          </p>
          <p className="ttheading">Tools</p>
        </Link>
        <Link
          to={"home/tools-techs"}
          className="tticons flex space-x-4 justify-center"
        >
          <p className="icon">
            <FA icon={faLaptopCode} />
          </p>
          <p className="ttheading">All</p>
        </Link>
      </ul>
      <div className="ttoutlet">
        <Outlet />
      </div>
    </>
  );
}

export default ToolTechnology;
