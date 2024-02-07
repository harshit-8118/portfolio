// Geeks for Geeks
const gfg = {
  organisation: 'Geeks For Geeks',
  role: 'Technical Content Writer',
  start_date: 'DEC 2023',
  end_date: 'Present',
  working: "Improving Data Structure and Competitive Programming articles, Contributing code, and Debugging Practice Problems. Submitted articles for Database Queries and Advance Machine Learning topic Data Pipelining."
}
// Healing Dove Foundation
const hdf = {
  organisation: 'Healing Dove Foundation',
  role: 'Web Developer Intern',
  start_date: 'JULY 2023',
  end_date: 'SEPT 2023',
  working: "Managed Blog website in 2 month internship, overseeing over 40 bugs in designing, restructuring, and proposed contact page. Worked with admin-panel of the website to propose new changes onto the website and documented new changes."
}

function Experience() {
  return (
    <>
      <div
        id="skills-toolTechs"
        data-aos="fade-up"
        className="text-center text-3xl font-bold font-alegreya tracking-[0.5rem] py-4"
      >
        INTERNSHIPS
      </div>
      <div className="ttoutlet_exp group flex justify-center text-xs  xss:text-md xms:text-base">
        <div className="ttoutlet_exp_left flex flex-col text-start m-2 text-[#134a4a] ">
          <span>Organisation</span>
          <span>Role</span>
          <span>Start Date</span>
          <span>End Date</span>
          <span>Responsibility</span>
        </div>
        <div className="ttoutlet_exp_right flex flex-col m-2 text-start border border-black  min-w-[150px]">
          <b className="text-black">:&nbsp;{gfg.organisation}</b>
          <b className="text-black">:&nbsp;{gfg.role}</b>
          <span>:&nbsp;{gfg.start_date}</span>
          <span>:&nbsp;{gfg.end_date}</span>
          <span>:&nbsp;{gfg.working}</span>
        </div>
      </div>
      <div className="ttoutlet_exp group flex justify-center text-xs  xss:text-md xms:text-base">
        <div className="ttoutlet_exp_left flex flex-col text-start m-2 text-[#134a4a] ">
          <span>Organisation</span>
          <span>Role</span>
          <span>Start Date</span>
          <span>End Date</span>
          <span>Responsibility</span>
        </div>
        <div className="ttoutlet_exp_right flex flex-col m-2 text-start border border-black  min-w-[160px] overflow-hidden">
          <b className="text-black">:&nbsp;{hdf.organisation}</b>
          <b className="text-black">:&nbsp;{hdf.role}</b>
          <span>:&nbsp;{hdf.start_date}</span>
          <span>:&nbsp;{hdf.end_date}</span>
          <span>:&nbsp;{hdf.working}</span>
        </div>
      </div>
    </>
  );
}

export default Experience;
