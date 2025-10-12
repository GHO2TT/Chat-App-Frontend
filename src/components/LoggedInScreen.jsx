import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ChatScreen from "../components/ChatScreen.jsx";
import ChatIcon from "../components/icons/ChatSvgIcon.jsx";
import MenuSvgIcon from "../components/icons/MenuSvgIcon.jsx";
import Chats from "../components/Chats.jsx";

const LoggedInScreen = () => {
  const divRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="app h-screen grid grid-cols-[100px_1fr] md:grid-cols-[100px_1fr]">
      {/* Sidebar */}
      <motion.div
        initial={{ width: 100 }}
        animate={{ width: isOpen ? 300 : 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="chat-list bg-[#37353E] overflow-hidden z-20"
        ref={divRef}
      >
        <div
          className={`${
            isOpen
              ? "flex justify-between items-center border-b p-3 h-[85px]"
              : "flex justify-center items-center h-[85px]"
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
            <ChatIcon width={43} height={43} stroke="white" strokeWidth={2} />
            {isOpen && <h1 className="ml-2 font-black text-[20px]">Vortex</h1>}
          </motion.div>

          {/* Toggle Button */}
          <button
            className="flex cursor-pointer items-center"
            onClick={toggleMenu}
          >
            <MenuSvgIcon
              width={30}
              height={30}
              fill={"none"}
              stroke={"white"}
              strokeWidth={2}
            />
          </button>
        </div>
        {/* Chats */}
        <Chats toggleMenu={toggleMenu} isOpen={isOpen} />
      </motion.div>

      {/* Main Chat Window */}
      <main className="chat-window flex-grow ">
        <ChatScreen />
      </main>
    </div>
  );
};

export default LoggedInScreen;
