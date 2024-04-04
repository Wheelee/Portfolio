import React from "react";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href="/Project"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
          </Link>
          <Link
            href="/Project"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
          </Link>
        </div>
      </div>
      <div className="text-black rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">Super Nova</h5>
        <p className="text-[#ADB7BE]">Description de Super Nova</p>
      </div>
    </div>
  );
};

export default ProjectCard;