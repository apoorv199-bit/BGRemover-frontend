import { assets } from "../assets/assets";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { removeBg } = useContext(UserContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 bg-white dark:bg-black">
      {/* Left side: video banner */}
      <div className="order-2 md:order-1 flex justify-center">
        <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.08)] rounded-3xl overflow-hidden">
          <video
            src={assets.video_banner}
            autoPlay
            loop
            muted
            className="w-full max-w-[400px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Right side: text content */}
      <div className="order-1 md:order-2">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          The fastest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500">
            background eraser
          </span>
        </h1>
        <p className="text-slate-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
          Give your photos a fresh new look in seconds! Our smart background
          remover instantly highlights your subject and erases the background—
          no editing skills needed. Drop your image into stunning designs, bold
          presentations, online stores, or wherever your creativity takes you.
          Try it now and make your images stand out like never before!
        </p>

        <div>
          <input
            type="file"
            accept="image/*"
            id="upload1"
            hidden
            onChange={(e) => removeBg(e.target.files[0])}
          />
          <label
            htmlFor="upload1"
            className="bg-black dark:bg-white text-white dark:text-black font-medium px-8 py-4 rounded-full hover:opacity-90 transition-transform hover:scale-105 text-lg"
          >
            Upload your image
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
