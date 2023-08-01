/** React */
import { useEffect } from "react";

/** Store */
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/modalSlice.js";

/** Assets */
import { BsXLg } from "react-icons/bs";

export default function Modal() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.modal.isOpen);
  const message = useSelector((state) => state.modal.message);

  function toggleModal() {
    dispatch(closeModal());
  }

  function closeOnEscapeKeyDown(e) {
    if ((e.charCode || e.keyCode) === 27) {
      dispatch(closeModal());
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div
      className={`z-[100] fixed top-0 right-0 bottom-0 left-0 bg-black/[.8] opacity-0 pointer-events-none transition duration-300 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto" : ""
      }`}
    >
      <div
        className={`z-10 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-9/12 min-h-[50%] rounded-md bg-light flex flex-col flex-nowrap justify-center items-center ${
          isOpen ? "pointer-events-auto" : ""
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-describedby="modal-text"
      >
        <span
          className="absolute top-3 right-3 cursor-pointer"
          onClick={toggleModal}
        >
          <BsXLg className="stroke-[1.5px]" />
        </span>
        <span id="modal-text" className="font-bold text-black">
          {message}
        </span>
      </div>
    </div>
  );
}
