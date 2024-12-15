import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-75"
        onClick={onClose}
      ></div>
      <div className="bg-slate-700 border-2 flex justify-center items-center flex-col border-green-500 rounded-lg p-5 z-10 w-6/12 text-white">
        {children}
      </div>
    </div>
  );
};

export default Modal;
