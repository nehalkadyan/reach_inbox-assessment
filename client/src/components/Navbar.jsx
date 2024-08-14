import React from "react";
import logo2 from "../assets/Logo_12.png";
import vector from "../assets/Vector.png";
import elipse from "../assets/elipse.png";
import arrow_down from "../assets/arrow_back_ios.png";
import { toggleTheme } from "../redux/theme/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import black_arrow from "../assets/black_arrow.png";

const Navbar = ({ isExpanded, toggleSidebar }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { themeState } = useSelector((state) => state.theme);

  let firstname = currentUser?.name.split(" ")[0].toString();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  //   let firstname = currentUser.name.split(" ")[0].toString();

  return (
    <header
      className={`bg-navBG mt-1 text-white h-16 flex items-center transition-colors ${
        themeState === "dark" ? "bg-navBG" : "bg-white"
      }`}
    >
      <div
        onClick={toggleSidebar}
        className={`w-12 py-2 px-3 h-full flex items-center pb-3 transition-colors ${
          themeState === "dark" ? "bg-sidebarBG" : "bg-[#FAFAFA]"
        }`}
      >
        <img src={logo2} alt="logo2" className="w-7 h-6 cursor-pointer" />
      </div>
      <div className="flex border-y border-Border1  justify-between w-full p-6">
        <div>
          <span
            className={`${
              themeState === "dark"
                ? "text-white text-base font-sans font-bold"
                : "text-[#5B5F66] text-base font-sans font-bold"
            }`}
          >
            Onebox
          </span>
        </div>
        <div className="flex gap-6 items-center">
          <div className="border py-1 px-1.5 rounded-full border-Border1 flex gap-1.5 items-center">
            <div
              onClick={handleToggleTheme}
              className={`transition-all duration-300 cursor-pointer${
                themeState === "dark"
                  ? "w-4 h-4 opacity-100"
                  : "w-0 h-0 opacity-0"
              }`}
            >
              <img src={elipse} alt="elipse" />
            </div>
            <div
              onClick={handleToggleTheme}
              className={`transition-all duration-300 cursor-pointer ${
                themeState === "dark" ? "w-4 h-4" : "w-full h-full"
              }`}
            >
              <img src={vector} alt="vector" />
            </div>
          </div>

          <div className="flex gap-2 items-center">
            {currentUser && (
              <div
                className={`font-sans font-semibold text-sm 
              ${themeState === "dark" ? "text-white" : "text-[#454F5B]"}`}
              >
                {firstname}'s Workspace
              </div>
            )}

            {/*  */}
            <div>
              {themeState === "dark" ? (
                <img className="w-4 h-4" src={arrow_down} alt="arrow_down" />
              ) : (
                <img className="w-3 h-3" src={black_arrow} alt="arrow_down" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
