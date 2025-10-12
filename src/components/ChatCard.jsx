import pfp from "../assets/download.png";
import { motion } from "framer-motion";

const ChatCard = ({ details, closeMenu, menuChecker }) => {
  function handleChatClick() {
    if (menuChecker) {
      closeMenu();
    }
    console.log("Clicked", details);
  }

  return (
    <div
      className="chat-card cursor-pointer flex flex-col hover:bg-gray-950 hover:border-r-2 hover:border-sky-500 "
      onClick={handleChatClick}
    >
      <div className="flex p-3 gap-3">
        <div className="profile-picture ">
          <img
            src={pfp}
            alt="profile Picture"
            className="rounded-[100px] h-[65px] w-[65px]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: menuChecker ? 1 : 0, x: menuChecker ? 0 : -20 }}
          transition={{ duration: 0.2, delay: menuChecker ? 0.3 : 0 }}
          className={menuChecker ? "flex pl-3 gap-7" : "hidden"}
        >
          <div className="flex flex-col ">
            {details.isGroup ? (
              <p className="font-bold text-1xl">{details.name}</p>
            ) : (
              <p className="font-bold text-1xl">{details.participants[0]}</p>
            )}
            <p className="text-[12px]">
              {details.lastMessage.text.length > 20
                ? details.lastMessage.text.slice(0, 20) + "..."
                : details.lastMessage.text}
            </p>
          </div>

          <div className="time-and-notif flex flex-col">
            <p>{details.lastMessage.createdAt.slice(11, 16)}</p>
            {details.unreadCount.user1 > 0 && (
              <p className="flex bg-gray-500 rounded-full justify-center">
                {details.unreadCount.user1}
              </p>
            )}
          </div>
        </motion.div>
      </div>
      <div className="border-b border-gray-700 w-[calc(100%-20%)] mx-auto"></div>
    </div>
  );
};

export default ChatCard;
