import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import useDragAndDrop from "../customHooks/useDragAndDrop";
import { UserContext } from "../context/UserContext";

const TryNow = () => {
  const { removeBg } = useContext(UserContext);

  const { isDragging, dragProps, validateFile } = useDragAndDrop({
    onDrop: (file, error) => {
      if (error) {
        toast.error("Please drop a valid image file (PNG, JPG, WebP)");
        return;
      }
      removeBg(file);
    },
  });

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file && validateFile(file)) {
      removeBg(file);
    } else {
      toast.error("Please select a valid image file (PNG, JPG, WebP)");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-black px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-7 text-center">
        Remove Image Background
      </h2>
      <p className="text-gray-500 dark:text-gray-300 mb-8 text-center text-lg">
        Get a transparent background for any image in seconds
      </p>

      <div
        className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl px-10 py-12 flex flex-col items-center space-y-5 w-full max-w-lg transition-all duration-300 ${
          isDragging
            ? "border-4 border-dashed border-violet-500 bg-violet-50 dark:bg-violet-900/20"
            : "border-4 border-dashed border-gray-200 dark:border-gray-700"
        }`}
        {...dragProps}
      >
        <input
          type="file"
          id="upload2"
          hidden
          accept="image/*"
          onChange={handleFileInput}
        />

        <label
          htmlFor="upload2"
          className="bg-gradient-to-r from-violet-600 to-pink-500 hover:brightness-110 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
        >
          Upload Image
        </label>

        <p className="text-gray-500 dark:text-gray-300 text-sm">
          {isDragging ? "Drop image here" : "or drop a file here"}
        </p>
      </div>
    </div>
  );
};

export default TryNow;
