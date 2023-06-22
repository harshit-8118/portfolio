import { semesterAchievements as SA } from "./AchievementsDesc";

function SemsterCard() {
  return (
    <div
      id="semesterCard"
      className="flex flex-col justify-center bg-[#1d2026]"
    >
      <div
        data-aos="fade-up"
        className="flex flex-col text-center text-3xl font-bold tracking-[0.5rem] py-8 text-white font-alegreya"
      >
        GRADES
      </div>
      <div className="tracking-normal text-sm text-center -mt-6 mb-10 font-roboto font-thin text-white mx-4">
        Other than my personal syllabus and learning, The academic coursework were there to enhance my knowledge. Those course-outcomes helped me also a lot to connect my skills with my learning.
      </div>
      <div className="flex flex-wrap justify-center py-2 mb-4 xsx:space-x-1 text-white space-y-2 xsx:space-y-0 font-roboto">
        <div data-aos="fade-right" data-aos-duration="600" className="flex justify-evenly border border-slate-400 rounded-3xl p-2 space-x-8 group bg-[#1d2026] hover:bg-gradient-to-r from-[#8bede1] to-[#3fad99] hover:text-black hover:font-bold">
          <div className="flex flex-col">
            <span>semester1</span>
            <span>semester2</span>
            <span>semester3</span>
            <span>semester4</span>
          </div>
          <div className="flex flex-col">
            <span className="oldstyle-nums">
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
        <div data-aos="fade-left" data-aos-duration="650" className="flex justify-evenly border border-slate-400 rounded-3xl p-2 space-x-8 group bg-[#1d2026] hover:bg-gradient-to-l from-[#8bede1] to-[#3fad99] hover:text-black hover:font-bold">
          <div className="flex flex-col">
            <span>semester5</span>
            <span>semester6</span>
            <span>semester7</span>
            <span>semester8</span>
          </div>
          <div className="flex flex-col">
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
