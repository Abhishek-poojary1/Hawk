import React, { createContext, useContext, useState } from "react";
import { ChevronLast, ChevronFirst, MoreVertical } from "lucide-react";
import { createPortal } from "react-dom";
import logo from "./img/sb-logo.png";
import { useAuth } from "../pages/AuthContext";
import anlogo from "./img/smartbuildlogo.png";
const SidebarContext = createContext();
export default function Dash({ children }) {
  const [expanded, setExpanded] = useState(true);
  const { isDarkMode } = useAuth();
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (text) => {
    setActiveItem(text === activeItem ? "" : text);
  };
  return (
    <div className="flex no-underline relative h-screen">
      <aside
        className={`block top-0 left-0 relative no-underline h-full select-none text-black border-r shadow-sm z-10 transition-width duration-300 ease-in-out ${
          expanded ? "w-48" : "w-16"
        } ${
          isDarkMode
            ? "bg-gradient-to-r from-[#383838] to-[#303064]"
            : "bg-gradient-to-r from-[#E19d65]/[0.4] to-[#726b66]"
        }`}
      >
        <nav className="h-full no-underline flex flex-col">
          <div className="p-3 pb-2 no-underline flex justify-between items-center">
            <div
              className={`flex items-center no-underline overflow-hidden transition-all ${
                expanded ? "w-32 font-bold text-white text-sm" : "w-0"
              }`}
            >
              {isDarkMode ? (
                <>
                  <img
                    src={anlogo}
                    style={{ height: "35px", marginRight: "5px" }}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <img
                    src={logo}
                    style={{ height: "30px", marginRight: "5px" }}
                    alt=""
                  />
                  <p
                    className={`text-lg ${
                      expanded ? "text-[#243150]" : "text-transparent"
                    }`}
                  >
                    SmartBuild
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1 rounded-lg  bg-gray-50 hover:bg-gray-100 border-none"
            >
              {expanded ? (
                <ChevronFirst className="h-4" />
              ) : (
                <ChevronLast className="h-4" />
              )}
            </button>
          </div>
          <SidebarContext.Provider
            value={{ expanded, activeItem, handleItemClick }}
          >
            <ul className="flex-1 overflow-y-auto no-underline no-scrollbar overflow-x-hidden m-2">
              {children}
            </ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </div>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded, activeItem, handleItemClick } = useContext(SidebarContext);
  const [showPopup, setShowPopup] = useState(false);
  const { isDarkMode } = useAuth();

  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setShowPopup(true);
    const { x, y, width } = e.currentTarget.getBoundingClientRect();
    setPopupPosition({ x: x + width + 10, y: y });
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <li
      className={`relative flex no-underline items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        activeItem === text
          ? "bg-gradient-to-tr no-underline from-indigo-200 to-text-gray-700 text-gray-700"
          : " hover:bg-gradient-to-l from-white text-white"
      }`}
      onClick={() => handleItemClick(text)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      <span
        className={`overflow-hidden no-underline transition-all ${
          expanded ? "w-52 ml-3  text-xs" : "w-0"
        } ${isDarkMode ? " text-gray-50 " : " text-black"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 no-underline rounded text-xs bg-indigo-400 ${
            expanded ? "" : "top-2 "
          }`}
        />
      )}
      {showPopup &&
        createPortal(
          <div
            className={`absolute top-0 left-full no-underline rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm visible opacity-100 translate-x-0 transition-all z-20 ${
              activeItem === text ? "bg-indigo-200 text-xs" : ""
            }`}
            style={{ top: popupPosition.y, left: popupPosition.x }}
          >
            {text}
          </div>,
          document.body
        )}
    </li>
  );
}
