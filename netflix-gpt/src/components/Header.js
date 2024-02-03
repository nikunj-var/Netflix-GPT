import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    // we should unsubscribe the function to prevent it from regular call everytime the header render.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    // Toggle Gpt Search
    dispatch(toggleGptSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black flex justify-between z-10">
      <img className="w-44" src={LOGO} />
      {user && (
        <div className="flex">
          {gptSearch && (
            <select
              className="p-2  text-white  m-2 bg-transparent"
              onChange={handleLanguageChange}
            >
              {/* either write values manually or write using map */}
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
              {/* <option value="hindi">Hindi</option>
            <option value="en">English</option>
            <option value="spanish">Spanish</option> */}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-8 h-10 bg-red-500 text-white"
            onClick={handleGptSearchClick}
          >
            {gptSearch ? "Home Page" : "Search Page"}
          </button>
          <img src={user?.photoURL} className=" w-12 h-12 my-8 " />
          <button onClick={handleSignOut} className="text-white text-xl">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
