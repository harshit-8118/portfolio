import { Link } from "react-router-dom";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileArrowDown,
  faPhoneVolume,
  faUser,
  faStar,
  faTrophy,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

const resumeLink = "https://drive.google.com/file/d/14es321EcXkN2cOiw54w5wqAWia_eM_OJ/view?usp=sharing";

function Header() {
  return (
    <div>
      <nav
        id="header"
        className="header flex justify-center h-32 items-center top-0 z-50 opacity-100 transition-all duration-300 fixed w-[100%] min-w-[10rem]"
      >
        <div className="p-2 ml-4 transition-all duration-300 group hover:border">
          <a target="_blank" href={resumeLink}>
            <FA icon={faFileArrowDown} shake className="faIcons" />
            <p className="inline text-sm font-diphel group-hover:text-[#166e64]">
              Resume
            </p>
          </a>
        </div>
        <div className="z-40 flex-1 text-center page-links">
          <div className="inline transition-all duration-300 hover:border p-2 group">
            <Link className="" to={"/"}>
              <FA
                icon={faHome}
                className="faIcons transition-all duration-300 group-hover:h-[1.40rem] hover:-translate-y-[0.10rem]"
              />
              <p className="hidden xss:inline transition-all duration-300 text-sm group-hover:text-[#03423a]">
                home
              </p>
            </Link>
          </div>
          <div className="inline transition-all duration-300 hover:border p-2 group">
            <Link className="" to={"/About"}>
              <FA
                icon={faUser}
                className="faIcons transition-all duration-300 group-hover:h-[1.40rem] hover:-translate-y-[0.10rem]"
              />
              <p className="hidden xss:inline transition-all duration-300 text-sm group-hover:text-[#03423a]">
                about me
              </p>
            </Link>
          </div>
          <div className="inline transition-all duration-300 hover:border p-2 group">
            <Link className="" to={"/Contact"}>
              <FA
                icon={faPhoneVolume}
                beat
                className="faIcons transition-all duration-300 group-hover:h-[1.40rem] hover:-translate-y-[0.10rem]"
              />
              <p className="hidden xss:inline transition-all duration-300 text-sm group-hover:text-[#03423a]">
                contact
              </p>
            </Link>
          </div>
        </div>
        <div id="header-right" className="mr-0 xms:mr-2 mt-20 xsm:mt-0 flex flex-col xsm:flex xsm:flex-row">
          <div className="inline hover:border transition-all duration-300 p-2 group">
            <a className="" href={"/#skills"}>
              <FA
                icon={faStar}
                className="px-1 h-4 w-4 lg:h-5 lg:w-5 transition-all duration-300 group-hover:h-[1.40rem] hover:-translate-y-[0.10rem] text-[#F7CF47]"
              />
              <p className="hidden sm:inline transition-all duration-300 text-sm group-hover:text-[#03423a]">
                skills
              </p>
            </a>
          </div>
          <div className="inline transition-all duration-300 hover:border p-2 group">
            <a className="" href={"/#projects"}>
              <FA
                icon={faShield}
                className="px-1 h-4 w-4 lg:h-5 lg:w-5 transition-all duration-300 group-hover:h-[1.40rem] hover:-translate-y-[0.10rem] text-[#F7CF47]"
              />
              <p className="hidden sm:inline transition-all duration-300 text-sm group-hover:text-[#03423a]">
                projects
              </p>
            </a>
          </div>
          <div className="inline transition-all duration-300 hover:border p-2 group">
            <a className="" href={"/#achievements"}>
              <FA
                icon={faTrophy}
                className="px-1 h-4 w-4 lg:h-5 lg:w-5 transition-all duration-300 group-hover:h-[1.40rem] hover:-translate-y-[0.10rem] text-[#F7CF47]"
              />
              <p className="hidden sm:inline transition-all duration-300 text-sm group-hover:text-[#03423a]">
                achievements
              </p>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
