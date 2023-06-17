import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileArrowDown,
  faAddressCard,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="header flex justify-center bg-gradient-to-r from-cyan-300 to-cyan-800 min-w-fit max-w-full h-14 items-center w-screen fixed top-0 z-50 opacity-95">
          <a href="https://drive.google.com/uc?export=download&id=1gXp27y_ZBGGvdVOFcnu05IcTKuyk-kmo">
           <abbr title="Download Resume">
            <FA icon={faFileArrowDown} shake className="faIcons mx-4" />
            </abbr> 
          </a>
      <div className="flex-1 text-center space-x-4 min-w-fit page-links">
        <Link className="" to={"/"}>
          <FA icon={faHome} className="faIcons " />
        </Link>
        <Link className="" to={"/About"}>
          <FA icon={faUser} className="faIcons ml-2 " />
        </Link>
        <Link className="" to={"/Contact"}>
          <FA icon={faPhoneVolume} className="faIcons " beat  />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
