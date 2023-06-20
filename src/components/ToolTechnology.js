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
      <div
        id="skills-toolTechs"
        data-aos="fade-up"
        className="text-center text-3xl font-bold font-alegreya tracking-[0.5rem] py-4"
      >
        MY SKILLS
      </div>
      <ul id="ttnavigation" className="ttnavigation">
        <Link to={"/"} className="tticons flex space-x-4 justify-center">
          <p
            className="icon"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-offset="200"
          >
            <FA icon={faLaptopCode} />
          </p>
          <p
            className="ttheading"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            All
          </p>
        </Link>
        <Link
          to={"home/dev-techs"}
          className="tticons flex space-x-4 justify-center"
        >
          <p
            className="icon"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-offset="200"
            data-aos-delay=""
          >
            <FA icon={faCode} />
          </p>
          <p
            className="ttheading"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            Technologies
          </p>
        </Link>
        <Link
          to={"home/dbs-techs"}
          className="tticons flex space-x-4 justify-center"
        >
          <p
            className="icon"
            data-aos="zoom-out-up"
            data-aos-duration="400"
            data-aos-offset="200"
          >
            <FA icon={faDatabase} />
          </p>
          <p
            className="ttheading"
            data-aos="zoom-in-up"
            data-aos-duration="450"
            data-aos-offset="200"
          >
            Databases
          </p>
        </Link>
        <Link
          to={"home/tools"}
          className="tticons flex space-x-4 justify-center"
        >
          <p
            className="icon"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-offset="200"
          >
            <FA icon={faScrewdriverWrench} />
          </p>
          <p
            className="ttheading"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-offset="200"
            data-aos-delay="100"
          >
            Tools
          </p>
        </Link>
        <Link
          to={"home/languages"}
          className="tticons flex justify-center space-x-4"
        >
          <p
            className="icon"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <FA icon={faLanguage} />
          </p>
          <p
            className="ttheading"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            Languages
          </p>
        </Link>
      </ul>
      <div className="ttoutlet group">
        <Outlet />
      </div>
    </>
  );
}

export default ToolTechnology;
