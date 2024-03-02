import React, { useState } from "react";

const NewTasks = ({ onAdd }) => {
  const [updateInputTasks, setUpdateInputTasks] = useState("");

  const handleInputTasks = (e) => {
    setUpdateInputTasks(e.target.value);
  };
  const handleInputClick = () => {
    if (updateInputTasks.trim() === "" || updateInputTasks.trim === 0) {
      return;
    }
    onAdd(updateInputTasks);
    setUpdateInputTasks("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 py-1 px-2 rounded-md bg-stone-200"
        value={updateInputTasks}
        onChange={handleInputTasks}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleInputClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTasks;
