import { useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  const modalRef = useRef();
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };
  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-500"
      onClick={handleClickOutside}
    >
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-8 shadow-lg transition-all duration-500"
        ref={modalRef}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-3 rounded-sm bg-transparent p-1 transition-all duration-200 hover:bg-gray-100"
        >
          Close
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
