import React from "react";
import { IoIosSend } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import { useSelector } from "react-redux";
import mail from "../assets/mail2.png";

const Rightbar = () => {
  const { themeState } = useSelector((state) => state.theme);

  return (
    <div
      className={`border-l-2  h-screen overflow-y-scroll scrollbar-hidden px-2
    ${
      themeState === "dark"
        ? "bg-black border-[#33383F]"
        : "bg-white border-[#E0E0E0]"
    }`}
    >
      <div
        className={`mt-5 rounded-lg py-2 pl-4
        ${
          themeState === "dark"
            ? "bg-[#23272C] text-white"
            : "bg-[#ECEFF3] text-black "
        }`}
      >
        Lead Details
      </div>
      <div
        className={`px-6 my-10 space-y-6  
        ${themeState === "dark" ? "text-white" : "text-[#637381]"}`}
      >
        <div className="flex justify-between text-sm">
          <div className="">Name</div>
          <div className="text-[#B9B9B9]">Orlando</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Contact No</div>
          <div className="text-[#B9B9B9]">+54-9062827869</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Email ID</div>
          <div className="text-[#B9B9B9]">orlando@gmail.com</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Linkedin</div>
          <div className="text-[#B9B9B9]">linkedin.com/in/timvadde/</div>
        </div>
        <div className="flex justify-between text-sm">
          <div>Company Name</div>
          <div className="text-[#B9B9B9]">Reachinbox</div>
        </div>
      </div>

      <div
        className={`mt-8  rounded-lg py-2 pl-4
        ${
          themeState === "dark"
            ? "bg-[#23272C] text-white"
            : "bg-[#ECEFF3] text-black"
        }`}
      >
        Activities
      </div>

      <div className="my-8 px-4">
        <div
          className={`px-2  ${
            themeState === "dark" ? "text-white" : "text-black"
          }`}
        >
          Campaign Name
        </div>
        <div
          className={`my-4 text-sm px-2   ${
            themeState === "dark" ? "text-white" : "text-black"
          }`}
        >
          3 Steps | 5 Days in Sequence
        </div>
        <div className="px-2">
          <div className="flex my-4 items-center">
            <div>
              <img
                src={mail}
                alt="mail"
                className="w-12 dark:bg-[#23272C] bg-[#EEF1F4] p-2 rounded-full"
              ></img>
            </div>
            <div
              className={`ml-10 space-y-2 
              ${themeState === "dark" ? "text-white" : "text-black "}`}
            >
              <div>Step 1: Email</div>
              <div className="text-[#B9B9B9] text-sm flex items-center">
                <IoIosSend className="mr-2" /> Sent 3rd, Feb
              </div>
            </div>
          </div>

          <div className="flex my-4 items-center">
            <div>
              <img
                src={mail}
                alt="mail"
                className="w-12 dark:bg-[#23272C] bg-[#EEF1F4] p-2 rounded-full"
              ></img>
            </div>
            <div
              className={`ml-10 space-y-2 
              ${themeState === "dark" ? "text-white" : "text-black "}`}
            >
              <div>Step 2: Email</div>
              <div className="text-[#B9B9B9] text-sm flex items-center">
                <IoMailOpen className="mr-2 text-yellow-500" /> Open 5th, Feb
              </div>
            </div>
          </div>

          <div className="flex my-4 items-center">
            <div>
              <img
                src={mail}
                alt="mail"
                className="w-12 dark:bg-[#23272C] bg-[#EEF1F4] p-2 rounded-full"
              ></img>
            </div>
            <div
              className={`ml-10 space-y-2 
              ${themeState === "dark" ? "text-white" : "text-black "}`}
            >
              <div>Step 3: Email</div>
              <div className="text-[#B9B9B9] text-sm flex items-center">
                <IoMailOpen className="mr-2 text-yellow-500" /> Open 5th, Feb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
