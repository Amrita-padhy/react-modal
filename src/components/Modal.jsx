import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsExclamationCircle } from "react-icons/bs";

function Modal() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  const closeModal = () => {
    setModal(!modal);
  };
  return (
    <div className=" w-screen h-screen bg-slate-200 flex justify-center items-center">
      {modal ? (
        <div
          className="modal_container w-screen h-screen bg-black/80 "
          onClick={closeModal}
        >
          <div
            className="flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-96 h-44 bg-yellow-100 p-1 text-left rounded-lg shadow-lg  mt-10">
              <div className=" flex justify-end">
                <AiOutlineCloseCircle
                  className="text-3xl text-red-600"
                  onClick={closeModal}
                />
              </div>

              <div className="flex items-center ">
                <BsExclamationCircle className="text-xl text-red-400  mr-3" />
                <h3 className="text-gray-800">Do you want to continue ? </h3>
              </div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                vero, vel eos amet repellendus placeat sunt? Dolore mollitia
                nisi.
              </p>
              <div className="flex justify-end items-center mb-3 ">
                <button
                  className="mr-2 outline p-1  rounded-lg text-gray-700"
                  onClick={closeModal}
                >
                  cancel
                </button>
                <button className="  p-1  rounded-lg text-white bg-sky-600">
                  proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl text-gray-800 my-2">Lets create a Modal</h2>
          <h6 className="text-sm text-gray-700 my-2">Click the below button</h6>
          <button
            className=" outline-double hover:text-lg hover:text-red-800 rounded-lg p-2"
            onClick={openModal}
          >
            Open Modal
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
