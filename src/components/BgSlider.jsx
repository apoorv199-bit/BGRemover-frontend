import { useState } from "react";
import { categoryData } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCategory, setActiveCategory] = useState(categoryData[0].id);

  const selectedCategory = categoryData.find(
    (cat) => cat.id === activeCategory
  );

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="mb-16 relative px-4 sm:px-6">
      {/* Section title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-10 text-center">
        Stunning Quality
      </h2>

      {/* Category selector */}
      <div className="flex justify-center mb-8 flex-wrap">
        <div className="inline-flex gap-2 sm:gap-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-full flex-wrap justify-center">
          {categoryData.map((category) => (
            <button
              key={category.id}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition ${
                activeCategory === category.id
                  ? "bg-white dark:bg-black text-gray-800 dark:text-white shadow"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Image comparison slider */}
      <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg dark:shadow-gray-800 aspect-[4/3] sm:aspect-[16/9]">
        {/* Left Image */}
        <img
          src={selectedCategory?.images?.original}
          alt="original image"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />
        {/* Right Image */}
        <img
          src={selectedCategory?.images?.processed}
          alt="processed image"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}% )` }}
        />
        {/* Slider */}
        <input
          type="range"
          className="absolute z-10 top-1/2 left-0 w-full transform -translate-y-1/2 appearance-none bg-transparent slider"
          min={0}
          max={100}
          onChange={handleSliderChange}
          value={sliderPosition}
        />
      </div>
    </div>
  );
};

export default BgSlider;
