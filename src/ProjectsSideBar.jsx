import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

const ProjectsSideBar = () => {
  return (
    <aside className=" s w-3/4 py-16 px-10 md:w-72 bg-stone-900 text-stone-50 rounded-r-xl max-[576]:w-1/2">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button className="flex justify-center py-2 px-4 bg-stone-700 text-stone-400 text-xs md:text-base rounded-2xl hover:bg-stone-600 hover:text-stone-100">
          <HiOutlinePlusSm />
          Add Tasks
        </button>
        <ul></ul>
      </div>
    </aside>
  );
};

export default ProjectsSideBar;
