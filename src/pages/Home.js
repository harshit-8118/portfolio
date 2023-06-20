import Landing from "../components/Landing";
import ToolTechnology from "../components/ToolTechnology";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";
import SemsterCard from "../components/SemsterCard";
import Underline from "../components/Underline";
import DownloadResume from "../components/DownloadResume";

function Home() {
  return (
    <div id="top" className="overflow-hidden w-[100%]">
      <div className="w-[100%]">
      <Landing />
      </div>
     <div className="h-[6rem]"></div>
      <Underline />
      <div id="skills" className="">
        <ToolTechnology />
      </div>
       <Underline />
      <div id="projects" className="">
      <Projects />
      </div>
      <Underline />
      <Achievements />
      <div className="-mt-16"></div>
      <DownloadResume />
      <Underline />
      <SemsterCard />
      <Footer />
    </div>
  );
}

export default Home;
