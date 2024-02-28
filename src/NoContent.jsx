import React from "react";
import noImage from "./assets/no-projects.png";
import Button from "./Button";

const NoContent = ({ onSubmit }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noImage}
        alt="No content image"
        className="w-16 object-contain mx-auto"
      />
      <h2 className="text-2xl my-4 text-stone-500">
        No Project selected of created
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mx-6">
        <Button onClick={onSubmit}> Create new project</Button>
      </p>
    </div>
  );
};

export default NoContent;
