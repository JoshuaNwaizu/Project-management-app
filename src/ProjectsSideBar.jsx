import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

const ProjectsSideBar = ({
  onSubmit,
  projects,
  onSelectedList,
  selectedListId,
}) => {
  return (
    <aside className=" w-3/4 py-16 px-10 md:w-72 bg-stone-900 text-stone-50 rounded-r-xl max-[576]:w-1/2">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          className="flex justify-center items-center gap-2 py-2 px-4 bg-stone-700 text-stone-400 text-xs md:text-base rounded-2xl hover:bg-stone-600 hover:text-stone-100"
          onClick={onSubmit}
        >
          <HiOutlinePlusSm className="text-xl" />
          Add Tasks
        </button>
        <ul className="mt-8">
          {projects.map((project) => {
            let cssClasses =
              "w-full text-left px-2 py-1 rounded-md my-1 hover:text-slate-200 hover:bg-stone-800 capitalize";
            if (project.id === selectedListId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
            }
            return (
              <li key={project.id}>
                <button
                  className={cssClasses}
                  onClick={() => onSelectedList(project.id)}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ProjectsSideBar;
