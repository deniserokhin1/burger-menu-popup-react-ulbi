import React, { PropsWithChildren } from "react";
import { ModalProps } from "../../types";
import "./modal.css";

const Modal = ({
  modalActive,
  setActive,
  children,
}: PropsWithChildren<ModalProps>) => {
  console.log(modalActive);
  return (
    <div
      className={modalActive ? "modalWindow modalWindow_active" : "modalWindow"}
      onClick={() => setActive(false)}
    >
      <div
        className={
          modalActive
            ? "modalWindow__content modalWindow__content_active"
            : "modalWindow__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
