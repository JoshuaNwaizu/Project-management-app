import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <div>
      <button
        className="py-2 px-6 text-stone-50 rounded-md bg-stone-800 hover:bg-stone-950"
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
