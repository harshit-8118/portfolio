import Emailing from "../components/Emailing";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Connect from "../components/Connect";

function Contact() {
  return (
    <div className="mt-[10rem]">
      <Emailing />
      <Connect />
      <div className="text-center h-16 pt-6 text-sm text-white bg-slate-800 tracking-widest">
        <FA icon={faCopyright} /> &nbsp;Harshit Shukla{" "}
        <span className="min-w-[16rem] pl-10 text-xs oldstyle-nums">
          last updated: 21/06/2023
        </span>
      </div>
    </div>
  );
}

export default Contact;
