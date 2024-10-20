import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/AE-en-20241014-TRIFECTA-perspective_2e053f61-f418-42cd-a121-785611989da2_large.jpg"
          alt="logo"
        />
      </div>

      <form className="w-3/12 p-12 my-32 mx-auto right-0 left-0 text-white bg-black absolute bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && ( <input
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
          type="text"
          placeholder="Full Name"
        />)}
        <input
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
          type="text"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already registered Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
