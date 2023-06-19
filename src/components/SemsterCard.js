import React from "react";
import { semesterAchievements as SA } from "./AchievementsDesc";

function SemsterCard() {
  return (
    <div
      id="semesterCard"
      className="flex flex-col justify-center bg-[#1d2026]"
    >
      <div
        data-aos="fade-up"
        className="flex flex-col text-center text-3xl font-bold tracking-[0.5rem] py-8 text-white"
      >
        GRADES
      </div>
      <div className="flex flex-wrap justify-center py-2 mb-4 xsx:space-x-1 text-white space-y-2 xsx:space-y-0">
        <div data-aos="fade-right" data-aos-duration="650" className="flex justify-evenly border border-slate-400 rounded-3xl p-2 space-x-8 group bg-[#1d2026] hover:bg-gradient-to-r from-[#64cabe] to-[#067863]">
          <div className="flex flex-col">
            <span>semester1</span>
            <span>semester2</span>
            <span>semester3</span>
            <span>semester4</span>
          </div>
          <div className="flex flex-col text-white">
            <span>
              {SA.sem1} <span className="text-xs">cgpa</span>
            </span>
            <span>
              {SA.sem2} <span className="text-xs">cgpa</span>
            </span>
            <span>
              {SA.sem3} <span className="text-xs">cgpa</span>
            </span>
            <span>
              {SA.sem4} <span className="text-xs">cgpa</span>
            </span>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="650" className="flex justify-evenly border border-slate-400 rounded-3xl p-2 space-x-8 group bg-[#1d2026] hover:bg-gradient-to-l from-[#64cabe] to-[#067863]">
          <div className="flex flex-col">
            <span>semester5</span>
            <span>semester6</span>
            <span>semester7</span>
            <span>semester8</span>
          </div>
          <div className="flex flex-col text-white">
            <span>
              {SA.sem5} <span className="text-xs">cgpa</span>
            </span>
            <span>{SA.sem6}</span>
            <span>{SA.sem7}</span>
            <span>{SA.sem8}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SemsterCard;
