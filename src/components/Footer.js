import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  const handleScroll = () => {
    const initialScrollY = window.scrollY;
    const finalScrollY = 0;
    const n = initialScrollY < 2400 ? 5 : 10;
    const steps = initialScrollY < 2400 ? 80 : 50;
    for (let i = 0; i <= n; i++) {
      setTimeout(() => {
        const newScrollY =
          initialScrollY + (finalScrollY - initialScrollY) * (i / n);
        window.scrollTo(0, newScrollY);
      }, i * steps);
    }
  };
  return (
    <>
      <div
        id="footer"
        className="bg-slate-200 border-slate-300 shadow-md border"
      >
        <div id="footer-top" className=" flex justify-around">
          <div
            id="social-media"
            className="flex space-x-1 m-1 p-1 xsx:space-x-4 xsx:m-4 xsx:p-4"
          >
            <a
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="250"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Harshit_8118"
              className="hover:bg-slate-400 p-2 h-[2.5rem] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <a
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="200"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/hharshit8118"
              className="hover:bg-slate-400 p-2 h-[2.3rem] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 512 512"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="150"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/harshit-shukla-079952203/"
              className="hover:bg-slate-400 p-2 h-[2.3rem] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
            <a
              data-aos="fade-right"
              data-aos-duration="100"
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/919450929272"
              className="hover:bg-slate-400 p-2 h-[2.3rem] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </a>
            <a
              data-aos="fade-right"
              data-aos-duration="100"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/harshit-8118"
              className="hover:bg-slate-400 p-2 h-[2.3rem] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </div>
          <div
            id="mailme"
            className="mt-2 xsx:mx-6 xsx:mt-8 p-2 h-[2.5rem] hover:bg-slate-400 rounded-full"
          >
            <Link to="mailto:hharshit8118@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex justify-center flex-wrap text-sm space-y-8 xxs:space-y-0">
          <div className="flex flex-col min-w-[10rem] text-center p-1 leading-loose m-1">
            <h1 className="text-xl text-green-700 font-bold font-roboto">
              Profiles
            </h1>
            <a
              className="footer-links"
              target="_blank"
              rel="noreferrer"
              href="https://leetcode.com/hharshit8118/"
            >
              leetcode
            </a>
            <a
              className="footer-links"
              target="_blank"
              rel="noreferrer"
              href="https://auth.geeksforgeeks.org/user/hharshit8118"
            >
              gfg
            </a>
            <a
              className="footer-links"
              target="_blank"
              rel="noreferrer"
              href="https://www.hackerrank.com/hharshit8118"
            >
              hackerrank
            </a>
            <a
              className="footer-links"
              target="_blank"
              rel="noreferrer"
              href="https://www.codechef.com/users/harsh_it_8118"
            >
              codechef
            </a>
            <a
              className="footer-links"
              target="_blank"
              rel="noreferrer"
              href="https://codeforces.com/profile/harsh_it_8118"
            >
              codeforces
            </a>
          </div>
          <div
            id="navigate-ids"
            className="flex flex-col min-w-[10rem] text-center p-1 leading-loose m-1"
          >
            <h1 className="text-xl text-green-700 font-bold font-roboto">
              Links
            </h1>
            <a className="footer-links" href="/#skills">
              skills
            </a>
            <a className="footer-links" href="/#projects">
              projects
            </a>
            <a className="footer-links" href="/#achievements">
              achievements
            </a>
            <Link to={"/about"} className="footer-links">
              about
            </Link>
            <Link className="footer-links" to={"/contact"}>
              Connect+
            </Link>
          </div>
          <div className="font-sans text-sm min-w-[10rem] p-1 text-center leading-loose m-1 ">
            <h1 className="text-xl text-green-700 font-bold font-roboto">
              Address
            </h1>
            <span className="text-slate-700 font-thin">
              EWS-15 Jankipuram <br />
              Lucknow - Uttar Pradesh <br />
              India
            </span>
          </div>
        </div>
      </div>
      <span
        className="fixed cursor-pointer bottom-20 z-40 right-1 w-10 h-10 rounded-[0.3rem] text-center pt-2 text-white bg-[#09776a]"
        onClick={handleScroll}
      >
        <FA icon={faArrowUp} />
      </span>
      <div className="text-center h-16 pt-6 text-sm text-white bg-slate-800 tracking-widest">
        <FA icon={faCopyright} /> &nbsp;Harshit Shukla{" "}
        <span className="min-w-[16rem] pl-10 text-xs oldstyle-nums">
          last updated: 07/02/2024
        </span>
      </div>
    </>
  );
}

export default Footer;
