import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ChatScreen from "../components/ChatScreen.jsx";
import ChatIcon from "../components/icons/ChatSvgIcon.jsx";
import MenuSvgIcon from "../components/icons/MenuSvgIcon.jsx";
import Chats from "../components/Chats.jsx";
import SettingsSvgIcon from "./icons/SettingsSvgIcon.jsx";
import SettingsScreen from "./SettingsScreen.jsx";
import { getUserCookie } from "../utils/cookies";

const LoggedInScreen = () => {
  const loggedInUser = getUserCookie();
  const [isOpen, setIsOpen] = useState(false);
  const [toggleSettingsMenu, setToggleSettingsMenu] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSettingsMenuHandler = () =>
    setToggleSettingsMenu((prev) => !prev);

  return (
    <div className="app h-screen grid grid-cols-[70px_1fr] md:grid-cols-[70px_1fr]">
      {/* Sidebar */}
      <motion.div
        initial={{ width: 70 }}
        animate={{ width: isOpen ? 280 : 70 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="chat-list flex flex-col justify-between h-screen bg-[#37353E] overflow-hidden z-20"
      >
        <div
          className={`${
            isOpen
              ? "flex justify-between items-center border-b p-2 md:p-3 h-[60px] md:h-[70px]"
              : "flex justify-center items-center h-[60px] md:h-[70px]"
          }`}
        >
          {/* Logo & Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
            transition={{ duration: 0.2, delay: isOpen ? 0.15 : 0 }}
            className={`${
              isOpen
                ? "cursor-pointer flex justify-center items-center"
                : "cursor-pointer hidden justify-center items-center"
            } `}
          >
            <ChatIcon
              width={32}
              height={32}
              stroke="white"
              strokeWidth={2}
              className="md:w-[38px] md:h-[38px]"
            />
            {isOpen && (
              <h1 className="ml-2 font-black text-base md:text-lg">Vortex</h1>
            )}
          </motion.div>

          {/* Toggle Button */}
          <button
            className="flex cursor-pointer justify-around p-1"
            onClick={toggleMenu}
          >
            <MenuSvgIcon
              width={24}
              height={24}
              fill={"none"}
              stroke={"white"}
              strokeWidth={2}
              className="md:w-[28px] md:h-[28px]"
            />
          </button>
        </div>
        {/* Chats */}
        <Chats
          toggleMenu={toggleMenu}
          isOpen={isOpen}
          selectedChat={handleChatSelect}
        />

        <button
          className="settings-button py-2 md:py-3 flex gap-1.5 justify-center items-center cursor-pointer hover:bg-gray-700 transition-colors"
          aria-label="Settings"
          type="button"
          onClick={toggleSettingsMenuHandler}
        >
          <SettingsSvgIcon
            fill={"none"}
            height={32}
            width={32}
            stroke={"white"}
            strokeWidth={2}
            className="md:w-[36px] md:h-[36px]"
          />
          {isOpen && (
            <span className="text-white font-medium text-sm md:text-base">
              Settings
            </span>
          )}
        </button>
      </motion.div>

      {/* Settings Menu - positioned outside sidebar for proper z-index */}
      <SettingsScreen
        isOpen={toggleSettingsMenu}
        onClose={() => setToggleSettingsMenu(false)}
        sidebarExpanded={isOpen}
      />

      {/* Main Chat Window */}
      <main className="chat-window flex-grow ">
        <ChatScreen loggedInUser={loggedInUser} selectedChat={selectedChat} />
      </main>
    </div>
  );
};

export default LoggedInScreen;
