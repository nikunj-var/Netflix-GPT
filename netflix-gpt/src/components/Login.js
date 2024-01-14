import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
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
        <form className="text-white absolute w-4/12 p-12  bg-black bg-opacity-75 mx-auto right-0 left-0  my-20 ">
          <h1 className="font-bold text-3xl py-2 m-2">
            {isSignIn ? "Sign in" : "Sign Up"}
          </h1>
         {!isSignIn && <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 bg-gray-700 w-full rounded"
          />}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 bg-gray-700 w-full rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 m-2 w-full bg-gray-700 rounded"
          />
          <button className="p-3 m-2 mt-5 mb-32 bg-red-500 w-full rounded">
            {isSignIn ? "Sign in" : "Sign Up"}
          </button>
          <p className="p-3 m-2 cursor-pointer" onClick={handleToggleSignIn}>
            {isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now" }
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
