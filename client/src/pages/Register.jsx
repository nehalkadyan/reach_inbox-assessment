import React, { useEffect } from "react";
import UserAuth from "../components/userAuth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      <UserAuth
        title={"Create a new account"}
        subtitle={"Sign Up"}
        btnText={"Create an account"}
        btnCaption={"Already have an account?"}
      />
    </div>
  );
};

export default Register;
