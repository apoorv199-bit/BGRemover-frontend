import { steps } from "../assets/assets";

const BgRemovalSteps = () => {
  return (
    <div className="text-center mb-16 bg-white dark:bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
        How to remove a background in seconds?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_25px_-5px_rgba(255,255,255,0.05)] hover:shadow-md dark:hover:shadow-lg transition duration-300"
          >
            <span className="inline-block bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {item.step}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BgRemovalSteps;
