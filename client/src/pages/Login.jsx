import React from "react";
import UserAuth from "../components/userAuth";

const Login = () => {
  return (
    <div>
      <UserAuth
        title={"Log in to your account"}
        subtitle={"Sign In"}
        btnText={"Log in to your account"}
        btnCaption={"Don't have an account?"}
      />
    </div>
  );
};

export default Login;
