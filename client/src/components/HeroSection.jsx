import React from "react";
import no_message_sign from "../assets/no_message_illustration.png";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { themeState } = useSelector((state) => state.theme);

  return (
    <div
      className={` ${
        themeState === "dark"
          ? "bg-black flex flex-col gap-12 items-center"
          : "bg-[#FAFAFA] flex flex-col gap-12 items-center"
      }`}
    >
      <div>
        <img src={no_message_sign} alt="no_message" />
      </div>

      <div className="flex flex-col items-center gap-6">
        <p className="text-2xl font-dmSans font-bold leading-9 text-white">
          It’s the beginning of a legendary sales pipeline
        </p>

        <div className="flex flex-col items-center">
          <p className="font-dmSans text-lg font-semibold text-no_message_contentBG">
            When you have inbound E-mails
          </p>
          <p className="font-dmSans text-lg font-semibold text-no_message_contentBG">
            you’ll see them here
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
