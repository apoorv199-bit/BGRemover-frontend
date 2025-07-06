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
    <div className="mb-16 relative">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-12 text-center">
        Stunning quality
      </h2>

      {/* Category selector */}
      <div className="flex justify-center mb-10 flex-wrap">
        <div className="inline-flex gap-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-full flex-wrap justify-center">
          {categoryData.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full font-medium ${
                activeCategory === category.id
                  ? "bg-white dark:bg-black text-gray-800 dark:text-white shadow-sm"
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
      <div className="relative w-full max-w-4xl overflow-hidden m-auto rounded-xl shadow-lg dark:shadow-gray-800 h-96 md:h-[500px]">
        <img
          src={selectedCategory?.images?.original}
          alt="original image"
          className="w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
        />
        <img
          src={selectedCategory?.images?.processed}
          alt="removed background image"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}% )` }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <input
          type="range"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
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
