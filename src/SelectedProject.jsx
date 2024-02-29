import React from "react";
import Tasks from "./Tasks/Tasks";

const SelectedProject = ({ project, onDelete, onAddTasks, onDeleteTasks }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16 mr-8">
      <header className="pb-4 mb-4 border-b-2 border-b-stone-700">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 capitalize">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTasks} onDelete={onDeleteTasks} />
    </div>
  );
};

export default SelectedProject;
