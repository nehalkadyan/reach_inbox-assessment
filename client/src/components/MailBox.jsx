import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomMail from "./CustomMail";
import { MdOutlineExpand } from "react-icons/md";
import { FaReply } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import DeleteModal from "./DeleteModal";
import { deleteMail } from "../redux/mails/mailSlice";

const MailBox = () => {
  const dispatch = useDispatch();
  const [showPopUp, setShowPopUp] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const selectedMail = useSelector((state) => state.mail.selectedThread);
  const { selectedThread } = useSelector((state) => state.mail);
  const { themeState } = useSelector((state) => state.theme);

  console.log("selectedThread", selectedThread);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const handleDelete = () => {
    if (selectedThread.length > 0) {
      dispatch(deleteMail(selectedThread[0]));
    }
    setShowDelete(!showDelete);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "d" || event.key === "D") {
        setShowDelete(!showDelete);
        console.log("Pressed D");
      }

      if (event.key === "r" || event.key === "R") {
        setShowPopUp(!showPopUp);
        console.log("Pressed R");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [showDelete, showPopUp]);

  return (
    <div className="overflow-y-scroll w-full no-scrollbar h-full">
      <div className="border-b-2 border-[#33383F]  w-full flex flex-col md:flex-row justify-between px-4 md:px-8 py-4">
        <div>
          <div
            className={`text-lg ${
              themeState === "dark" ? "text-white" : "text-black"
            }`}
          >
            Orlando
          </div>
          <div
            className={`text-sm ${
              themeState === "dark" ? "text-[#FFFFFF66]" : "text-[#343A40B2]"
            }`}
          >
            orladom@gmail.com
          </div>
        </div>
        <div className="flex items-center space-x-3 mt-3 md:mt-0">
          <div
            className={`flex border  items-center rounded-md py-2 px-3 text-sm ${
              themeState === "dark"
                ? "bg-[#1F1F1F] text-white border-[#343A40]"
                : "bg-white text-black border-[#343A40]"
            }`}
          >
            <GoDotFill className="text-yellow-500 text-xl" /> Meeting Completed{" "}
            <SlArrowDown className="ml-2" />
          </div>
          <div
            className={`flex items-center  border   rounded-md py-2 px-3 border-[#343A40] text-sm ${
              themeState === "dark"
                ? "bg-[#1F1F1F] text-white "
                : "bg-white text-black "
            }`}
          >
            Move <SlArrowDown className="ml-2" />
          </div>
          <div
            className={`border rounded-md py-2 px-3 text-sm border-[#343A40]
            ${
              themeState === "dark"
                ? "bg-[#1F1F1F] text-white "
                : "bg-white text-black"
            }`}
          >
            ...
          </div>
        </div>
      </div>

      <div className="py-8 mx-4 md:mx-8 relative flex justify-center items-center">
        <div
          className={`h-[2px] w-full ${
            themeState === "dark" ? "bg-[#33383F]" : "bg-[#E0E0E0]"
          }`}
        ></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className={` px-4 py-1 text-sm 
            ${
              themeState === "dark"
                ? "bg-[#171819] text-white"
                : "bg-[#E0E0E0] text-black"
            }`}
          >
            Today
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {selectedMail.map((mail) => (
          <Mail key={mail.id} {...mail} themeState={themeState} />
        ))}
      </div>

      <div className="py-8 mx-4 md:mx-8 relative flex justify-center items-center">
        <div className="h-[2px] w-full bg-[#E0E0E0] dark:bg-[#33383F]"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="dark:bg-[#171819] bg-[#E0E0E0] text-black dark:text-white px-4 py-1 text-sm flex items-center space-x-1">
            <MdOutlineExpand className="mr-3 text-xl text-[#AEAEAE]" /> View all{" "}
            <span className="text-blue-500">{selectedThread.length - 1}</span>
            <span>replies</span>
          </div>
        </div>
      </div>

      {showPopUp && (
        <div className="mx-4 md:mx-8">
          <CustomMail onClose={() => setShowPopUp(false)} />
        </div>
      )}

      <div
        className="cursor-pointer flex items-center fixed bottom-0 left-0 md:ml-10 mb-10 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-5 md:px-10 py-2"
        onClick={togglePopUp}
      >
        <FaReply className="mr-2 text-xl" /> Reply
      </div>

      {showDelete && (
        <DeleteModal
          onCancel={() => setShowDelete(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

const Mail = ({ fromEmail, toEmail, subject, body, themeState }) => {
  return (
    <div
      className={` w-full md:w-[700px]  border border-[#343A40] mx-4 md:mx-8 rounded-md my-3

    ${themeState === "dark" ? "bg-[#141517]" : "bg-white"}`}
    >
      <div className="p-4">
        <div className="flex justify-between py-4">
          <div className="space-y-2 ">
            <div
              className={`font-bold ${
                themeState === "dark" ? "text-white" : "text-black"
              }`}
            >
              {subject}
            </div>
            <div
              className={`text-sm ${
                themeState === "dark" ? "text-[#AEAEAE]" : "text-[#637381]"
              }`}
            >
              from: {fromEmail}
            </div>
            <div
              className={`text-sm ${
                themeState === "dark" ? "text-[#AEAEAE]" : "text-[#637381]"
              }`}
            >
              to: {toEmail}
            </div>
          </div>
          <div
            className={`text-sm ${
              themeState === "dark" ? "text-[#7F7F7F]" : "text-[#637381]"
            }`}
          >
            20 June 2022 : 9:16AM
          </div>
        </div>
        <div
          className={`py-4  w-full md:w-2/3 
            ${themeState === "dark" ? "text-[#E1E0E0]" : "text-[#172B4D]"}`}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
};

export default MailBox;
