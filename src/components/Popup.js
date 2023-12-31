import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";

const Popup = (props) => {
  const data = props.data;
  const hidden = props.hidden;
  const project_name = data.project_name;
  const technologies = data.technologies;
  const other_techs = data.other_techs;
  const description = data.description;
  const git_link = data.git_link;
  const project_imgs = data.project_imgs;

  return (
    <div className={`fixed outer-popup  z-[40] ${hidden} linear-gradient top-0 left-0  h-[100vh] w-[100vw] min-w-[400px]`}>
      <div
        id="popup"
        className={`popuptext-xl text-slate-800`}
      >
        <div className="popHeading sticky top-2 z-40">
          <h1 className="font-alegreya font-semibold tracking-widest md:font-semibold text-xl md:text-2xl text-[#fff]">{project_name}</h1>
          <span className="mt-[.25rem] hover:scale-110 ">
            <a href={git_link} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 496 512"
                className="bg-white"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </span>
        </div>
        <div className="poptoolTechs p-1 md:p-3">
          <p className="float-left text-white font-alegreya">Tools and Technologies :</p>
          {technologies &&
            technologies.map((techs, ind) => <li className="font-diphel" data-aos="fade-left" data-aos-duration="400" data-aos-delay={ind*50} key={techs}>{techs}</li>)}
          {other_techs &&
            other_techs.map((techs, ind) => <li className="font-diphel" data-aos="fade-left" data-aos-duration="400" data-aos-delay={ind*50 + 200} key={techs}>{techs}</li>)}
        </div>
        <div className="popDesc text-black hover:bg-yellow-50">
          <FA icon={faComment} /> &nbsp;{description}
        </div>
        <div id="popImages">
          {project_imgs &&
            project_imgs.map((img, ind) => (
              <div key={img} className={`hover:opacity-100 opacity-80 transition-all duration-200 ${ind%2 == 0? '-skew-x-3': 'skew-x-3'} hover:skew-x-0 popImagesimg z-30 border`}>
                <p className="text-center oldstyle-nums font-darum text-white bg-[#1d2026]">$ {ind + 1} $</p>
                <img key={img} src={img} alt={project_name + ".img"} />
              </div>
            ))}
        </div>
      </div>
      </div>

  );
};

export default Popup;
