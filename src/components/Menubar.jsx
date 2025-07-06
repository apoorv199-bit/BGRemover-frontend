import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  useClerk,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";
import { UserContext } from "../context/UserContext";

const Menubar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openSignIn, openSignUp } = useClerk();
  const { user } = useUser();
  const { credit } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(AppContext);
  const navigate = useNavigate();

  const openRegister = () => {
    setMenuOpen(false);
    openSignUp({});
  };

  const openLogin = () => {
    setMenuOpen(false);
    openSignIn({});
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black px-8 py-4 flex justify-between item-center">
      {/* left side: logo + text */}
      <Link className="flex items-center space-x-2" to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="h-8 w-8 object-contain cursor-pointer"
        />
        <span className="text-2xl font-semibold text-violet-600 dark:text-white cursor-pointer">
          BGRemover.
          <span className="text-slate-400 dark:text-gray-400 cursor-pointer">
            io
          </span>
        </span>
      </Link>

      {/* Right side: Action buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <SignedOut>
          <button
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium"
            onClick={openLogin}
          >
            Login
          </button>
          <button
            className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium px-4 py-2 rounded-full text-center"
            onClick={openRegister}
          >
            Sign Up
          </button>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/pricing")}
              className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:scale-105 cursor-pointer"
            >
              <img src={assets.credits} alt="credits" height={24} width={24} />
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                Credits: {credit}
              </p>
            </button>
            <p className="text-gray-600 dark:text-gray-300 max-sm:hidden">
              Hi, {user?.firstName}
            </p>
          </div>
          <UserButton />
        </SignedIn>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
             transition-all duration-300 hover:scale-105 active:scale-95
             transform-gpu"
        >
          {theme === "dark" ? (
            <Sun
              size={20}
              className="text-yellow-500 transition-transform duration-300 rotate-0 hover:rotate-12"
            />
          ) : (
            <Moon
              stroke="none"
              fill="currentColor"
              size={20}
              className="text-gray-700 dark:text-gray-300 transition-transform duration-300 rotate-0 hover:-rotate-12"
            />
          )}
        </button>
      </div>

      {/* Mobile hamburger */}
      <div className="flex md:hidden">
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? (
            <X size={28} className="text-black dark:text-white" />
          ) : (
            <Menu size={28} className="text-black dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 right-8 bg-white dark:bg-black shadow-md dark:shadow-lg rounded-md flex flex-col space-y-4 p-4 w-40 border border-gray-200 dark:border-gray-700">
          <SignedOut>
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium"
              onClick={openLogin}
            >
              Login
            </button>
            <button
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium px-4 py-2 rounded-full text-center"
              onClick={openRegister}
            >
              Sign Up
            </button>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => {
                  navigate("/pricing");
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 px-4 py-1.5 sm:py-2.5 rounded-full hover:scale-105 cursor-pointer"
              >
                <img
                  src={assets.credits}
                  alt="credits"
                  height={24}
                  width={24}
                />
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                  Credits: {credit}
                </p>
              </button>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <UserButton />
              <p className="text-gray-600 dark:text-gray-300">
                {user?.firstName}
              </p>
            </div>
          </SignedIn>
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
             transition-all duration-300 min-w-[44px] min-h-[44px] 
             flex items-center justify-center"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon
                stroke="none"
                fill="currentColor"
                size={20}
                className="text-gray-700 dark:text-gray-300"
              />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Menubar;
