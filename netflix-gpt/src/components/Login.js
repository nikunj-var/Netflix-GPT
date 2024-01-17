import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Validate the form data
    // checkValidateData
    console.log(password.current.value);
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    // sign in sign up
    if (!isSignIn) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + errorMessage);
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const handleToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        {" "}
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <div>
        {" "}
        <form
          className="text-white absolute w-4/12 p-12  bg-black bg-opacity-75 mx-auto right-0 left-0  my-20 "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-bold text-3xl py-2 m-2">
            {isSignIn ? "Sign in" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 m-2 bg-gray-700 w-full rounded"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 bg-gray-700 w-full rounded"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 m-2 w-full bg-gray-700 rounded"
            ref={password}
          />
          <p className=" text-red-600 text-bold m-2">{errorMessage}</p>
          <button
            className="p-3 m-2 mt-5 mb-32 bg-red-500 w-full rounded"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign in" : "Sign Up"}
          </button>
          <p className="p-3 m-2 cursor-pointer" onClick={handleToggleSignIn}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;

// use formik to create forms
