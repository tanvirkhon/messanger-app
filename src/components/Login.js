import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Bootcamp Chat</h2>
        <div
          className="login-button google"
          onClick={() => auth.signInWithRedirect(new GoogleAuthProvider())}>
          <GoogleOutlined /> Sign in with Google
        </div>
        <br /> <br />
        <div className="login-button facebook">
          <FacebookOutlined /> Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
