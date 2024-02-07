import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { myphoto } from "../assets/Img/images";
import DownloadResume from "../components/DownloadResume";
import Connect from "../components/Connect";

function About() {
  return (
    <>
      <div className="mt-32 border"></div>
      <div
        id="aboutContainer"
        className="aboutContainer flex justify-evenly flex-wrap p-2 bg-[#f2f2f2] py-8"
      >
        <div
          data-aos="fade-right"
          data-aos-duration="400"
          id="photo-about"
          className="flex flex-col justify-center photo-about border m-2"
        >
          <div id="about-img" className="mx-auto">
            <img src={myphoto} />
          </div>
          <div id="about-desc" className="about-desc whitespace-pre-wrap">
            Greetings! I'm Harshit Shukla, a final-year Computer Science and
            Engineering student at Bundelkhand Institute of Engineering and
            Technology in Jhansi. With a focus on machine learning, I've
            completed projects implementing ML from scratch, incorporating deep
            learning techniques and web scraping. My proficiency extends to
            full-stack web development, demonstrated through various MERN stack
            projects. Over 2+ years, I've cultivated skills in Data Structures
            and Algorithms through platforms like LeetCode and GeeksforGeeks.
            Excited to collaborate on innovative projects in full-stack web
            development, data analysis, and ML, I'm actively seeking job
            opportunities in these domains.
          </div>
        </div>
        <div
          id="about-card"
          data-aos="fade-left"
          data-aos-duration="400"
          className="about-card my-auto group transition-all duration-500 hover:bg-[#1d2026]"
        >
          <div className="flex flex-col space-y-3  group-hover:text-white font-alegreya">
            <span>Name</span>
            <span>Email</span>
            <span>Graduation</span>
          </div>
          <div className="flex flex-col space-y-3 group-hover:text-white font-alegreya">
            <span className="w-[15rem]">: Harshit Shukla</span>
            <span className="w-[15rem]">: hharshit8118@gmail.com</span>
            <span className="w-[15rem] oldstyle-nums">
              : BTech-Computer Science and Engineering (2020-2024)
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] py-4">
        <DownloadResume />
      </div>
      <Connect />
      <div className="text-center h-16 pt-6 text-sm text-white bg-slate-800 tracking-widest">
        <FA icon={faCopyright} /> &nbsp;Harshit Shukla{" "}
        <span className="min-w-[16rem] pl-10 text-xs oldstyle-nums">
          last updated: 07/02/2024
        </span>
      </div>
    </>
  );
}

export default About;
