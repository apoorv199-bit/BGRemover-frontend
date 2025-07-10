const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/10 dark:bg-white/10">
      <div className="flex flex-col items-center">
        <div className="border-4 border-violet-600 rounded-full h-16 w-16 border-t-transparent animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
          Removing background...
        </p>
      </div>
    </div>
  );
};

export default Loader;
