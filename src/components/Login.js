import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");

  // const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.length > 0 && value.length <= 3) {
      setErrorMessage("Required more than 3 letters in Name");
    } else {
      setErrorMessage("");
    }
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message)
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //* Sign Up Form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: "https://avatars.githubusercontent.com/u/92149824?v=4",
          }).then(() => {
            const { uid, email, displayName, photoURL } = user;
                    dispatch(
                      addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                      })
                    );
            }).catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //* Sign In Form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p>
          {!isSignInForm ? "Already an User?" : "New to Netflix?"}
          <span
            className="text-red-500 ml-[5px] cursor-pointer font-bold hover:underline"
            onClick={handleSignUp}
          >
            {!isSignInForm ? "Sign In Now" : "Sign Up Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
