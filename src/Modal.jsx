import React, { forwardRef, useImperativeHandle, useRef } from "react";

import { createPortal } from "react-dom";

const Modal = forwardRef(({ children, buttonText }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md fixed top-[45%] left-2/4 -translate-x-2/4 -translate-y-2/4"
    >
      {children}
      <form method="dialog">
        <button>{buttonText}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
