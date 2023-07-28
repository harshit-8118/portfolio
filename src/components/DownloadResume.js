const DownloadableResumeLink =
  "https://drive.google.com/uc?export=download&id=1uwhNchzJXuAw9pyP5XmDjiSDnierJvMk";

function DownloadResume() {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="300"
      data-aos-offset="100"
      className="border-b-4 border-t text-center w-fit mx-auto rounded-[2.5rem] hover:text-white hover:bg-[#101010] text-black transition-all duration-500 bg-[#f8c20d] text-xl p-6 border-[#1c1c1c] group font-roboto font-bold"
    >
      <a
        href={DownloadableResumeLink}
        className="transition-all duration-500 group-hover:text-[1.33rem]"
      >
        Download Resume
      </a>
    </div>
  );
}

export default DownloadResume;
