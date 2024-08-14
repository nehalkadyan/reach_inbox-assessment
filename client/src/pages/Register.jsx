import React from "react";
import UserAuth from "../components/userAuth";

const Register = () => {
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
