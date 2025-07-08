import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { image, resultImage } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="mx-4 my-3 lg:mx-44 mt-10 mb-10 min-h-[75vh]">
      <div className="bg-white dark:bg-black rounded-lg px-8 py-6 shadow-md">
        {/* Image container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Original
            </p>
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="original"
                className="rounded-md w-full object-cover border border-gray-200 dark:border-gray-700"
              />
            ) : (
              <div className="rounded-md w-full h-64 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  No image selected
                </p>
              </div>
            )}
          </div>

          {/* Right side */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Background Removed
            </p>
            <div className="rounded-md border border-gray-300 dark:border-gray-700 min-h-[16rem] md:h-full bg-layer relative overflow-hidden">
              {resultImage ? (
                <img
                  src={resultImage}
                  alt="result"
                  className="w-full object-cover"
                />
              ) : (
                <>
                  {image && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                    </div>
                  )}
                  {!image && (
                    <div className="h-64 flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400">
                        Result will appear here
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        {resultImage && (
          <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
            <button
              className="border border-violet-500 text-violet-600 dark:text-violet-400 font-semibold py-2 px-4 rounded-full text-lg hover:bg-violet-50 dark:hover:bg-violet-950 hover:scale-105 transition-all duration-300"
              onClick={() => navigate("/")}
            >
              Try another image
            </button>
            <a
              href={resultImage}
              download
              className="cursor-pointer py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-violet-600 to-pink-500 shadow-lg hover:brightness-110 hover:scale-105 transition duration-300 ease-in-out"
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
