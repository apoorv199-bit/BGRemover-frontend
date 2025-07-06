import { assets, FOOTER_CONSTANTS } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3 bg-white dark:bg-black">
      <img src={assets.logo} alt="logo" width={32} />
      <p className="flex-1 text-gray-700 dark:text-gray-300 pl-4">
        <span className="hidden sm:inline">
          &copy; {new Date().getFullYear()} @apoorvsahu | All rights reserved.
        </span>
        <span className="sm:hidden text-xs">
          &copy; {new Date().getFullYear()} @apoorvsahu
        </span>
      </p>
      <div className="flex gap-3">
        {FOOTER_CONSTANTS.map((item, index) => (
          <a
            href={item.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item.logo} alt="logo" width={32} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
