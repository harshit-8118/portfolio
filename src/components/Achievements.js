import { achievements } from "./AchievementsDesc";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Achievements() {
  String.prototype.replaceJSXfunc = function (find, replace) {
    return this.split(find)
      .flatMap((item) => [item, replace])
      .slice(0, -1);
  };
  return (
    <div id="achievements" className="w-full overflow-hidden">
      <div
        id="projects"
        data-aos="fade-up"
        className="flex flex-col text-center text-2xl xss:text-3xl font-alegreya font-bold tracking-[0.3rem] py-8"
      >
        MY ACHIEVEMENTS...
      </div>
      <div className="tracking-normal text-sm text-center -mt-6 font-pathway mx-4">
        I passionately give my time to DSA problems. it's ofcourse not easy but
        I honestly complete it whether it is POTD or Weekly Contest.
      </div>
      <div id="achievementContainer" className="">
        {achievements.map((achievement, index) => (
          <div
            key={achievement.key}
            data-aos-duration="300"
            data-aos={index % 2 ? "fade-left" : "fade-right"}
            className={
              index % 2 === 0
                ? "achiCard group lg:pr-[24rem] md:pr-[18rem] sm:pr-[10rem]"
                : "achiCard group lg:pl-[24rem] md:pl-[18rem] sm:pl-[10rem]"
            }
          >
            <div className={index % 2 === 0 ? `achiImg` : `achiImg hidden`}>
              <a target="_blank" rel="noreferrer" href={achievement.link}>
                <img src={achievement.img} alt="img.jpg" />
              </a>
            </div>
            <div className="achiLower group-hover:border-transparent">
              <div className="achiPlatform uppercase tracking-wider font-righteous text-[#1d2026] h-8">
                {achievement.platform}
              </div>
              <div className="achiId p-1 flex space-x-4 h-8 mx-auto">
                <span className="font-roboto font-semibold">
                  {achievement.id}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={achievement.link}
                  className="group-hover:text-blue-500 group-hover:text-[1rem]"
                >
                  <FA icon={faArrowUpRightFromSquare} />
                </a>
              </div>
              <div className="achiProbSolve p-1 flex space-x-4 h-8 mx-auto font-pathway">
                <h1>Problems Solved : </h1>
                <p className="oldstyle-nums font-semibold text-slate-800 tracking-widest group-hover:text-[1rem]">
                  {achievement.problem_solved}
                </p>
              </div>
              <div className="achiProbSolve p-1 flex space-x-4 h-8 mx-auto font-pathway">
                <h1>Maximum Rating : </h1>
                <p className="oldstyle-nums font-semibold text-slate-800 tracking-widest group-hover:text-[1rem]">
                  {achievement.max_rating.replaceJSXfunc(
                    "-",
                    <FA
                      key={achievement.id}
                      icon={faXmark}
                      className="text-red-600"
                    />
                  )}
                </p>
              </div>
              <div className="achiOther font-pathway list-none mx-auto">
                {achievement.other &&
                  achievement.other.map((achives, ind) => (
                    <li key={ind}>
                      <FA
                        icon={faCheck}
                        className="px-2 group-hover:text-yellow-600 group-hover:text-lg"
                      />
                      {achives.replaceJSXfunc(
                        "*",
                        <FA
                          key={ind}
                          icon={faStar}
                          className="text-yellow-500"
                        />
                      )}
                    </li>
                  ))}
              </div>
            </div>
            <div className={index % 2 !== 0 ? `achiImg` : `achiImg hidden`}>
              <a target="_blank" rel="noreferrer" href={achievement.link}>
                <img src={achievement.img} alt="img.jpg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
