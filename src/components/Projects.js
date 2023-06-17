import React, { useEffect, useRef, useState } from "react";
import Popup from "./Popup";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "./ProjectsDesc";

function Projects() {
  const [data, setdata] = useState({});
  const [hidden, setHidden] = useState("hidden");

  const popOpen = () => {
    if (hidden == "hidden") {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  };

  return (
    <>
      <span
        id="popupclose"
        className={`bg-stone-500 w-8 h-8 pt-1 text-center cursor-pointer top-28 rounded-full z-40 right-8 fixed ${hidden} lg:right-32 xl:right-60 2xl:right-96 text-white hover:bg-slate-900`}
        onClick={popOpen}
      >
        <FA icon={faXmark} className="scale-125" />
      </span>
      <div className="projectContainer w-[99%] mx-auto my-4">
        <Popup data={data} hidden={hidden} />
        {projects.map((project, ind) => (
          <div key={ind} className="projectCard group">
            <div className="cardImg"></div>
            <div className="p-[.15rem] cardBody flex flex-col">
              <h1 className="font-bold text-2xl py-2 xsm:text-3xl lg:text-4xl">
                {project.project_name}
              </h1>
              <div className="cardDescLinks">
                <a
                  href={project.git_link}
                  target="_blank"
                  className="mt-[.13rem] px-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
                <button
                  className="openpopup w-8"
                  onClick={() => {
                    setdata(project);
                    popOpen();
                  }}
                >
                  <i className="text-black group-hover:text-blue-600">
                    <FA icon={faArrowUpRightFromSquare} />
                  </i>
                </button>
              </div>
            </div>
            <div className="space-y-1 cardBodyBottom group-hover:text-slate-900">
              <div className="cardTechsMain">
                <p className="p-[.15rem] text-sm w-[6rem] border border-black xsm:text-base xsm:w-[6.8rem] mr-[0.1rem] group-hover:border-white">
                  Specifications
                </p>
                :
                <div className="p-[.15rem] border border-black flex justify-center space-x-1 divide-x-2 divide-black text-sm xsm:text-base group-hover:border-white group-hover:divide-white">
                  {project.technologies.map((techs, ind2) => (
                    <li key={ind2} className="p-1">
                      {techs}
                    </li>
                  ))}
                </div>
              </div>
              <div className="cardTechsOther">
                {project.other_techs.length ? (
                  <>
                    <p className="p-[.15rem] text-sm w-[6rem] border border-black xsm:text-base xsm:w-[6.8rem] mr-[0.1rem] group-hover:border-white">
                      Other Techs
                    </p>
                    :
                    <div className="p-[.15rem] text-sm flex flex-wrap justify-center space-x-1 divide-x-2 xsm:text-base border border-black divide-black group-hover:divide-white group-hover:border-white">
                      {project.other_techs.map((otechs, ind3) => (
                        <li key={ind3} className="p-1">
                          {otechs}
                        </li>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
              <div className="cardDesc spacing-x-4">
                <FA icon={faArrowRight} />
                &nbsp;
                {project.description.substring(0, 150)} . . .
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
