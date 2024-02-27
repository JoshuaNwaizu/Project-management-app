import React from "react";
import Inputs from "./Inputs";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-center my-4 gap-4">
        <li>
          <button className="text-stone-800 hover:text-stone-600">
            Cancel
          </button>
        </li>
        <li>
          <button className="py-2 px-6 text-stone-50 rounded-md bg-stone-800 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Inputs label="Title" />
        <Inputs label="Description" textarea />
        <Inputs label="Due date" />
      </div>
    </div>
  );
};

export default NewProject;
