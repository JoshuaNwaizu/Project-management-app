import React from "react";
import NewTasks from "./NewTasks";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <div>
      <h1 className="capitalize text-2xl font-bold text-stone-700 mb-4">
        Tasks
      </h1>
      <NewTasks onAdd={onAdd} />
      {/* Tasks input */}
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet!
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 rounded-md bg-stone-100 mt-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4 ">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
