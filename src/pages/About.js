import React from "react";
import { FontAwesomeIcon as FA} from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { myphoto } from "../assets/Img/images";

function About() {
  return (
    <>
      <div className="mt-20"></div>
      <div
        id="aboutContainer"
        className="aboutContainer flex justify-evenly flex-wrap p-2 bg-slate-200"
      >
        <div
          id="photo-about"
          className="flex flex-col justify-center photo-about border m-2"
        >
          <div id="about-img" className="mx-auto">
            <img src={myphoto} />
          </div>
          <div id="about-desc" className="about-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus veritatis repellat incidunt voluptate reiciendis
            repellendus. Aspernatur excepturi debitis quasi eius nostrum iusto
            illum quas sit vero, modi non sapiente voluptatibus, error beatae!
            At, quae. Velit, eos architecto. Perferendis quasi, velit laboriosam
            odit dolor nulla quas voluptas illum similique iusto? Atque itaque
            eveniet porro quos! Sapiente vitae sunt est fuga harum, ducimus
            minima quaerat, dolorum repellendus, voluptatum sed dolor inventore
            amet ex aliquid! Mollitia, laudantium obcaecati assumenda nobis a
            rerum officiis.
          </div>
        </div>
        <div id="about-card" className="about-card my-auto group text-slate-800">
          <div className="flex flex-col space-y-2  group-hover:text-white">
            <span>Name</span>
            <span>Date of Birth</span>
            <span>High School</span>
            <span>Intermediate</span>
            <span>Graduation</span>
          </div>
          <div className="flex flex-col space-y-2 group-hover:text-white">
            <span>: Harshit Shukla</span>
            <span>: 16 Feb, 2000</span>
            <span>: 2015-2016</span>
            <span>: 2017-2018</span>
            <span>: Btech-Computer Science and Engineering (2020-2024)</span>
          </div>
        </div>
      </div>
        <div
          id="footer-bar"
          className="text-center h-16 pt-6 text-sm text-white bg-slate-800"
        >
          <FA icon={faCopyright} /> &nbsp;Harshit Shukla{" "}
          <span className="min-w-[16rem] pl-10 text-xs">
            last updated: x/y/z
          </span>
        </div>
    </>
  );
}

export default About;
