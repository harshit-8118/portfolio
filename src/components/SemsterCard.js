import React from "react";
import { semesterAchievements as SA } from "./AchievementsDesc";

function SemsterCard() {
  return (
    <div id="semesterCard" className="flex justify-center flex-wrap py-2 mb-4 xsx:space-x-1">
      <div className="flex justify-evenly border border-slate-400 w-40 rounded-3xl p-2 bg-gradient-to-r from-slate-100 to-slate-500">
        <div className="flex flex-col text-slate-700">
          <span>semester1</span>
          <span>semester2</span>
          <span>semester3</span>
          <span>semester4</span>
        </div>
        <div className="flex flex-col text-white">
          <span>{SA.sem1}</span>
          <span>{SA.sem2}</span>
          <span>{SA.sem3}</span>
          <span>{SA.sem4}</span>
        </div>
      </div>
      <div className="flex justify-evenly w-40 border border-slate-400 rounded-3xl p-2 bg-gradient-to-r from-slate-100 to-slate-500">
        <div className="flex flex-col text-slate-700">
          <span>semester5</span>
          <span>semester6</span>
          <span>semester7</span>
          <span>semester8</span>
        </div>
        <div className="flex flex-col text-white">
          <span>{SA.sem5}</span>
          <span>{SA.sem6}</span>
          <span>{SA.sem7}</span>
          <span>{SA.sem8}</span>
        </div>
      </div>
    </div>
  );
}

export default SemsterCard;
