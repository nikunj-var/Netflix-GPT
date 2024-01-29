import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

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
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => console.log(error));
          console.log(user);

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
        <img src={BG_URL} />
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
              ref={name}
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
