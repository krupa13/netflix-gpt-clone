import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState('');

  const email = useRef(null);
  const password = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);

    if(value.length > 0 && value.length <= 3) {
      setErrorMessage("Name should be more 3 characters")
    } else {
      setErrorMessage('');
    }

  }

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    console.log(message);
    setErrorMessage(message);
  };

  const handleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            value={name}
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-700 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          Sign In
        </button>
        <p>
          New to Netflix?
          <span
            className="text-red-700 mr-[15px] cursor-pointer font-bold"
            onClick={handleSignUp}
          >
            Sign Up Now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
