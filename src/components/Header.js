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
    <div>
    <nav id="header" className="header flex justify-center h-32 items-center top-0 z-50 opacity-100 transition-all duration-500 fixed w-[100%] min-w-[10rem]">
          <a href="https://drive.google.com/uc?export=download&id=1gXp27y_ZBGGvdVOFcnu05IcTKuyk-kmo">
           <abbr title="Download Resume">
            <FA icon={faFileArrowDown} shake className="faIcons mx-2" />
            </abbr> 
          </a>
      <div className="z-40 flex-1 text-center space-x-0 xss:space-x-4 page-links">
        <Link className="" to={"/"}>
          <FA icon={faHome} className="faIcons" />
        </Link>
        <Link className="" to={"/About"}>
          <FA icon={faUser} className="faIcons" />
        </Link>
        <Link className="" to={"/Contact"}>
          <FA icon={faPhoneVolume} className="faIcons " beat  />
        </Link>
      </div>
    </nav>
    </div>
  );
}

export default Header;
