import React from "react";

function DeleteModal({ onCancel, onDelete }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#8484847D] bg-opacity-50 z-50">
      <div className="bg-gradient-to-b from-[#141517] to-[#232528] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg flex flex-col items-center max-w-md mx-4">
        <h2 className="text-xl text-[#FFFFFF] sm:text-2xl md:text-3xl font-bold">
          Are you sure?
        </h2>
        <p className="text-xs text-[#E8E8E8] sm:text-sm md:text-base lg:text-lg my-6 sm:my-8 md:my-10 px-4 sm:px-8 md:px-12 text-center">
          Are you sure you want to delete this mail?
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onCancel}
            className="bg-[#25262B] text-white px-8 sm:px-10 md:px-12 py-2 sm:py-3 md:py-4 rounded-md focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="bg-gradient-to-r from-[#FA5252] to-[#A91919] text-white px-8 sm:px-10 md:px-12 py-2 sm:py-3 md:py-4 rounded-md focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
