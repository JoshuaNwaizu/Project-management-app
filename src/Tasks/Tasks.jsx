import React from "react";
import NewTasks from "./NewTasks";

const Tasks = ({ onAdd, onDelete }) => {
  return (
    <div>
      <h1 className="capitalize text-2xl font-bold text-stone-700 mb-4">
        Tasks
      </h1>
      <NewTasks onAdd={onAdd} />
      {/* Tasks input */}
      <p className="text-stone-800 my-4">
        This project does not have any tasks yet
      </p>
      <ul></ul>
    </div>
  );
};

export default Tasks;
