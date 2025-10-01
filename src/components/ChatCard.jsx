import pfp from "../assets/download.png";
import { motion } from "framer-motion";

const ChatCard = ({ navOpen, closeMenu, menuChecker }) => {
  function handleChatClick() {
    if (menuChecker) {
      closeMenu();
    }
    console.log("Clicked");
  }

  return (
    <div
      className="chat-card cursor-pointer hover:bg-gray-950 hover:border-r-2 hover:border-sky-500 "
      onClick={handleChatClick}
    >
      <div className="flex items-center justify-center py-3">
        <div className="profile-picture">
          <img
            src={pfp}
            alt="profile Picture"
            className="rounded-[100px] h-[65px] w-[65px]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: navOpen ? 1 : 0, x: navOpen ? 0 : -20 }}
          transition={{ duration: 0.2, delay: navOpen ? 0.3 : 0 }}
          className={navOpen ? "flex" : "hidden"}
        >
          <div className="flex flex-col px-3">
            <p className="font-bold text-1xl">Full Name</p>
            <p className="text-[12px]">Message description...</p>
          </div>

          <div className="time-and-notif flex flex-col px-3">
            <p>19:00</p>
            <p className="flex bg-gray-500 rounded-full justify-center">2</p>
          </div>
        </motion.div>
      </div>
      <div className="border-b border-gray-700 w-[calc(100%-20%)] mx-auto"></div>
    </div>
  );
};

export default ChatCard;
