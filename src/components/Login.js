import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { getAuth, signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  // Google
  const providerGoogle = new GoogleAuthProvider();
  // Facebook
  const providerFacebook = new FacebookAuthProvider();

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Bootcamp Chat</h2>
        <div
          className="login-button google"
          onClick={() => signInWithRedirect(auth, providerGoogle)}>
          <GoogleOutlined /> Sign in with Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          onClick={() => signInWithRedirect(auth, providerFacebook)}>
          <FacebookOutlined /> Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
