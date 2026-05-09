import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-900 text-white py-3">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-semibold">Start ReactJS</span>
        <ul className="flex gap-5 text-gray-400">
          <li className="text-white">Home</li>
          <li className="hover:text-white">About</li>
          <li className="hover:text-white">Services</li>
          <li className="hover:text-white">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
