import React, { useState } from "react";
import home from "../assets/Home.png";
import user from "../assets/user.png";
import mail from "../assets/mail.png";
import sent from "../assets/sent.png";
import menu from "../assets/menu.png";
import data from "../assets/data2.png";

import analytics from "../assets/analytics.png";
import { useSelector } from "react-redux";
import MailRender from "./MailRender";
import ExpandedSideBarTop from "./ExpandedSideBarTop";

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { themeState } = useSelector((state) => state.theme);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    if (index === 6) {
      toggleSidebar();
    }
  };

  let firstInitial = currentUser?.name.split(" ")[0][0];
  let secondInitial = currentUser?.name.split(" ")[1][0];

  return (
    <div className="flex h-full ">
      {/* Sidebar Section */}
      <aside
        className={`${
          themeState === "dark"
            ? "bg-sidebarBG border-Border1"
            : "bg-[#FAFAFA] border-Border1"
        } text-white h-full transition-all duration-300 ease-out ${
          isExpanded ? "w-18" : "w-12"
        } flex-shrink-0`}
      >
        <nav className="flex h-full flex-col items-center w-12  border-r border-Border1">
          <ul className="py-4 px-2 gap-8 flex flex-col items-center">
            <li
              onClick={() => handleItemClick(1)}
              className={`transition-transform duration-300 ease-out transform hover:scale-110 cursor-pointer ${
                selectedItem === 1 ? "bg-gray-500 p-0.5 rounded-lg" : ""
              }`}
            >
              <img src={home} alt="Home" />
            </li>
            <li
              onClick={() => handleItemClick(2)}
              className={`transition-transform duration-300 ease-out transform hover:scale-110 cursor-pointer ${
                selectedItem === 2 ? "bg-gray-500 p-1 rounded-lg" : ""
              }`}
            >
              <img src={user} alt="User" />
            </li>
            <li
              onClick={() => handleItemClick(3)}
              className={`transition-transform duration-300 ease-out transform hover:scale-110 cursor-pointer ${
                selectedItem === 3 ? "bg-gray-500 p-1 rounded-lg" : ""
              }`}
            >
              <img src={mail} alt="Mail" />
            </li>
            <li
              onClick={() => handleItemClick(4)}
              className={`transition-transform duration-300 ease-out transform hover:scale-110 cursor-pointer ${
                selectedItem === 4 ? "bg-gray-500 p-1 rounded-lg" : ""
              }`}
            >
              <img src={sent} alt="Sent" />
            </li>
            <li
              onClick={() => handleItemClick(5)}
              className={`transition-transform duration-300 ease-out transform hover:scale-110 cursor-pointer ${
                selectedItem === 5 ? "bg-gray-500 p-1 rounded-lg" : ""
              }`}
            >
              <img src={menu} alt="Menu" />
            </li>
            <li
              onClick={() => handleItemClick(6)}
              className={`transition-transform duration-300 ease-out transform hover:scale-110 cursor-pointer ${
                selectedItem === 6 ? "bg-gray-500 p-1 rounded-lg" : ""
              }`}
            >
              <img src={data} alt="Data" />
            </li>
            <li
              onClick={() => handleItemClick(7)}
              className={`transition-transform duration-300 ease-out transform hover:scale-110 cursor-pointer ${
                selectedItem === 7 ? "bg-gray-500 p-1 rounded-lg" : ""
              }`}
            >
              <img src={analytics} alt="Analytics" />
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-4 left-2 h-8 w-8 flex justify-center items-center bg-initialsBG rounded-full">
          {currentUser && (
            <span className="text-sm font-inte font-normal">
              {firstInitial}
              {secondInitial}
            </span>
          )}
        </div>
      </aside>

      {/* Content Section */}
      {isExpanded && (
        <div className="flex-grow p-4 h-screen scrollbar-hide overflow-y-auto border-r border-[#E0E0E0]">
          <ExpandedSideBarTop />
          <MailRender />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
