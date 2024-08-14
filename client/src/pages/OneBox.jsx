import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccessful } from "../redux/user/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Rightbar from "../components/Rightbar";
import MailBox from "../components/MailBox";

const OneBox = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (!token) {
      Navigate("/register");
    }

    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
      Navigate("/");
    }
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { themeState } = useSelector((state) => state.theme);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mails, setMails] = useState([]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        const userInfo = {
          name:
            `${decodedToken.user.firstName} ${decodedToken.user.lastName}` ||
            "",
          email: decodedToken.user.email || "",
        };

        dispatch(signInSuccessful({ user: userInfo, token }));

        localStorage.setItem("token", `Bearer ${token}`);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setMails(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching mails:", error);
      });
  }, []);

  return (
    <div
      className={` ${
        themeState === "dark"
          ? "bg-sidebarBG flex flex-col min-h-screen"
          : "bg-[#FAFAFA] flex flex-col min-h-screen"
      }`}
    >
      <Navbar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />

      <div
        className={` ${
          themeState === "dark"
            ? "bg-sidebarBG flex flex-1 flex-col lg:flex-row"
            : "bg-[#FAFAFA] flex flex-1 flex-col lg:flex-row"
        }`}
      >
        <Sidebar
          isExpanded={isExpanded}
          toggleSidebar={toggleSidebar}
          className={`lg:${isExpanded ? "w-1/4" : "w-16"} ${
            themeState === "dark"
              ? "bg-sidebarBG  border-Border1"
              : "bg-[#FAFAFA]  border-Border1"
          } `}
        />

        <main
          className={`flex-1 p-4 md:p-8  ${
            isExpanded ? "lg:ml-1/4" : "lg:ml-0"
          } ${
            themeState === "dark" ? "bg-black" : "bg-[#FAFAFA]"
          } flex justify-center items-center`}
        >
          {isExpanded ? <MailBox /> : <HeroSection />}
        </main>

        {isExpanded && (
          <Rightbar className="lg:flex lg:w-1/4 xl:w-1/5 2xl:w-1/6" />
        )}
      </div>
    </div>
  );
};

export default OneBox;
