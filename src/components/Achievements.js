import React from "react";
import {achievements} from "./AchievementsDesc";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faCross,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

function Achievements() {
  String.prototype.replaceJSXfunc = function (find, replace) {
    return this.split(find)
      .flatMap((item) => [item, replace])
      .slice(0, -1);
  };
  return (
    <div id="achievementContainer">
      {achievements.map((achievement) => (
        <div key={achievement.key} className="achiCard group">
          <div className="achiImg">
            <a target="_blank" href={achievement.link}><img src={achievement.img} /></a>
          </div>
          <div className="achiLower group-hover:border-transparent">
            <div className="achiPlatform group-hover:bg-slate-500 group-hover:text-white h-8">{achievement.platform}</div>
            <div className="achiId p-1 flex space-x-4 group-hover:bg-slate-300 h-8">
              <span className="group-hover:text-sm underline-offset-4 group-hover:underline">{achievement.id}</span>
              <a target="_blank" href={achievement.link} className="group-hover:text-blue-700 group-hover:text-base">
                <FA icon={faArrowUpRightFromSquare} />
              </a>
            </div>
            <div className="achiProbSolve p-1 flex space-x-4 group-hover:text-black group-hover:bg-slate-300 h-8">
              <h1>Problems Solved : </h1>
              <p className="oldstyle-nums font-semibold text-slate-800 tracking-widest group-hover:text-base">{achievement.problem_solved}</p>
            </div>
            <div className="achiProbSolve p-1 flex space-x-4 group-hover:bg-slate-300 h-8">
              <h1>Maximum Rating : </h1>
              <p className="oldstyle-nums font-semibold text-slate-800 tracking-widest group-hover:text-base">
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
            <div className="achiOther group-hover:bg-slate-300 list-none">
              {achievement.other &&
                achievement.other.map((achives, ind) => (
                  <li key={ind}>
                    <FA icon={faCheck} className="px-2 group-hover:text-yellow-600" />
                    {achives.replaceJSXfunc(
                      "*",
                      <FA key={ind} icon={faStar} className="text-yellow-500" />
                    )}
                  </li>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
