import React from "react";
import logo from "../assets/reach_inbox_logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Fixed the import

const UserAuth = ({ title, subtitle, btnText, btnCaption }) => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    try {
      // Redirect to Google login URL
      window.location.href =
        "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/onebox";
    } catch (error) {
      console.error("Error during sign-up:", error);
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <div className="bg-mainBG min-h-screen flex flex-col items-center justify-between">
      {/* Logo */}
      <div className="p-2.5 flex justify-center border-b border-b-Border1 w-full">
        <img className="w-28 h-8 md:w-40 md:h-8" src={logo} alt="logo" />
      </div>

      {/* Form */}
      <div className="pt-6 px-6 md:px-10 pb-10 bg-gradient-to-r from-darkGray1 to-darkGray2 rounded-md border border-Border1 max-w-sm w-full md:max-w-md">
        <form className="flex flex-col gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-4 md:gap-6 items-center">
            <h4 className="text-lg md:text-xl font-semibold leading-7 md:leading-8 text-white font-sans text-center">
              {title}
            </h4>

            <div
              onClick={handleSignUp}
              className="flex justify-center h-12 border w-full rounded border-lightBorder items-center py-2 px-4 gap-3 cursor-pointer"
            >
              <div>
                <FcGoogle className="w-4 h-5" />
              </div>
              <div className="text-sm md:text-base text-lightGray text-center leading-6 md:leading-7 font-normal font-sans">
                {subtitle} with Google
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
            <button className="py-3 bg-gradient-to-r from-customBlue1 to-customBlue2 rounded text-sm px-8 md:px-9 font-sans text-white w-full">
              {btnText}
            </button>

            <div className="font-sans text-alreadyHaveAnAccount font-normal text-sm md:text-base text-center">
              {btnCaption}{" "}
              <Link
                to={subtitle === "Sign Up" ? "/login" : "/register"}
                className="text-signIn cursor-pointer font-sans"
              >
                {subtitle === "Sign Up" ? "Sign In" : "Sign Up"}
              </Link>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="py-5 w-full text-center">
        <p className="text-xs leading-4 font-sans text-copyright">
          © 2023 Reachinbox. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default UserAuth;
