import React from "react";
import { useSelector } from "react-redux";
import camapaign from "../assets/campaign.png";

const MailCard = ({ email, subject, interested, date, read }) => {
  const { themeState } = useSelector((state) => state.theme);

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div
      className={`flex border-y py-2.5 cursor-pointer flex-col gap-[8px] ${
        themeState === "dark"
          ? "border-darkCardBorder"
          : "border-lightCardBorder"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {read && (
            <div
              className={`bg-${
                themeState === "dark" ? "darkAccent" : "lightAccent"
              } rounded-full w-[8px] h-[8px]`}
            ></div>
          )}
          <p
            className={`font-inter font-semibold text-sm ${
              themeState === "dark" ? "text-darkText" : "text-lightText"
            }`}
          >
            {email}
          </p>
        </div>

        <p
          className={`text-xs font-normal font-inter ${
            themeState === "dark" ? "text-darkGrayText" : "text-[#919EAB]"
          }`}
        >
          {formatDate(date)}
        </p>
      </div>

      <p
        className={`font-inter font-normal text-xs ${
          themeState === "dark" ? "text-darkGrayText" : "text-[#172B4D]"
        }`}
      >
        {subject}
      </p>

      <div className="flex items-center justify-around">
        <div
          className={`flex items-center cursor-pointer gap-1 p-2 ${
            themeState === "dark"
              ? "bg-darkCardBackground"
              : "bg-lightCardBackground"
          } rounded-xl`}
        >
          <div
            className={`bg-${
              themeState === "dark" ? "lightAccent" : "darkAccent"
            } rounded-full w-[8px] h-[8px]`}
          ></div>
          <p
            className={`text-sm font-semibold ${
              themeState === "dark" ? "text-lightAccent" : "text-lightAccent"
            }`}
          >
            Interested
          </p>
        </div>
        <div
          className={`bg-${
            themeState === "dark" ? "darkCardBackground" : "lightCardBackground"
          } py-[4px] px-[10px] rounded-full cursor-pointer flex items-center gap-2`}
        >
          <img src={camapaign} alt="campaign" />
          <p
            className={`font-sans font-bold text-xs ${
              themeState === "dark" ? "text-darkText" : "text-lightText"
            }`}
          >
            Campaign Name
          </p>
        </div>
      </div>
    </div>
  );
};

export default MailCard;
