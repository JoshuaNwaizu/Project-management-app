import React, { useRef } from "react";
import Inputs from "./Inputs";
import Button from "./Button";

const NewProject = ({ onStop }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
  };
  return (
    <div className="w-[34rem] mt-16">
      <menu className="flex items-center justify-center my-4 gap-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-600"
            onClick={onStop}
          >
            Cancel
          </button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>
      <div>
        <Inputs label="Title" ref={title} />
        <Inputs label="Description" ref={description} textarea />
        <Inputs label="Due date" ref={dueDate} />
      </div>
    </div>
  );
};

export default NewProject;
