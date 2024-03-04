import React from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const ProjectsSideBar = ({
  onSubmit,
  projects,
  onSelectedList,
  selectedListId,
  classNames,
  handleClose,
}) => {
  return (
    <aside
      className={twMerge(
        " w-3/4 py-16 px-10 md:w-72 bg-stone-900 text-stone-50 rounded-r-md max-sm:w-1/2 max-sm:fixed max-sm:top-0 max-sm:h-full max-sm:-left-full max-sm:transition-all max-sm:duration-300",
        classNames,
      )}
      onClick={handleClose}
    >
      <button
        className="py-2 px-4 text-stone-800 rounded-md bg-stone-50 hover:bg-stone-100 relative bottom-11 right-7 mr-5 md:hidden"
        // onClick={handleClose}
      >
        Close
      </button>
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
