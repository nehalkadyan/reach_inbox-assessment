import React from "react";
import { useSelector } from "react-redux";
import arrow_down from "../assets/blue_arrow_down.png";
import refresh from "../assets/refresh.png";
import light_refresh from "../assets/light_refresh.png";
import search from "../assets/search.png";
import arrowDown from "../assets/arrow_back_ios.png";
import black_arrow from "../assets/black_arrow.png";
import black_search from "../assets/Search-s.png";

const ExpandedSideBarTop = () => {
  const { mails } = useSelector((state) => state.mail);

  const { themeState } = useSelector((state) => state.theme);

  let totalMails = mails.length;

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex items-center justify-between pr-[15px]">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-[8px]">
            <p className="text-xl font-sans font-bold text-[#4285F4]">
              All Inbox(s)
            </p>
            <div className="cursor-pointer">
              <img src={arrow_down} alt="arrow_down" />
            </div>
          </div>

          <div>
            <span
              className={`font-sans font-bold text-xs ${
                themeState === "dark" ? "text-white" : "text-[#343A40]"
              }`}
            >
              {totalMails}/{totalMails}
            </span>
            <span
              className={`  ml-2 font-sans text-xs ${
                themeState === "dark" ? "text-[#7F7F7F]" : "text-[#7F7F7F]"
              }`}
            >
              Inboxes selected
            </span>
          </div>
        </div>

        <div
          className={`p-[8px] rounded-lg cursor-pointer ${
            themeState === "dark"
              ? "bg-navBG"
              : "bg-[#FAFAFA] border border-[#DFE3E8]"
          }`}
        >
          {themeState === "dark" ? (
            <img src={refresh} alt="refresh" />
          ) : (
            <img src={light_refresh} alt="refresh" />
          )}
        </div>
      </div>

      <div className="pr-2 flex  gap-3.5 flex-col">
        <div
          className={` ${
            themeState === "dark"
              ? "bg-[#23272C] flex items-center py-1 px-1.5 rounded"
              : "bg-[#F4F6F8] flex items-center py-1 px-1.5 rounded"
          }`}
        >
          {themeState === "light" ? (
            <img src={black_search} alt="search" className="cursor-pointer" />
          ) : (
            <img src={search} alt="search" className="cursor-pointer" />
          )}
          <input
            type="text"
            placeholder="Search"
            className={` ${
              themeState === "dark"
                ? "outline-none ml-2 w-[259px]  text-gray-600 font-normal border-none text-sm font-sans bg-[#23272C]"
                : "outline-none ml-2 w-[259px]  text-gray-600 font-normal border-none text-sm font-sans bg-[#F4F6F8]"
            }`}
          />
        </div>

        <div className="flex items-center justify-between border-b border-[#222426] pb-3">
          <div className="flex items-center gap-1">
            <div
              className={`text-[#5C7CFA] font-inter font-bold text-sm  py-[3px] px-[8px] rounded-xl w-[34px]${
                themeState === "dark" ? "bg-[#222426]" : "bg-[#ECECEC]"
              }`}
            >
              26
            </div>

            <p
              className={`${
                themeState === "dark"
                  ? "text-sm font-bold font-inter text-[#E6E6E6]"
                  : "text-sm font-bold font-inter text-[#343A40]"
              }`}
            >
              New Replies
            </p>
          </div>

          <div className="flex items-center gap-3 ">
            <p
              className={`${
                themeState === "dark"
                  ? "text-sm font-bold font-inter text-[#E6E6E6]"
                  : "text-sm font-bold font-inter text-[#343A40]"
              }`}
            >
              Newest
            </p>
            {themeState === "light" ? (
              <img src={black_arrow} alt="arrow" />
            ) : (
              <img src={arrowDown} className="w-3.5" alt="arrow_down" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedSideBarTop;
