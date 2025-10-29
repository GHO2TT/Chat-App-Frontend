import pfp from "../assets/download.png";
import { motion } from "framer-motion";

const ChatCard = ({ details, closeMenu, menuChecker, selectedChat }) => {
  function handleChatClick() {
    if (menuChecker) {
      closeMenu();
    }
    selectedChat(details);
  }

  return (
    <div
      className="chat-card cursor-pointer hover:bg-gray-950 hover:border-r-2 hover:border-sky-500"
      onClick={handleChatClick}
    >
      <div className="flex justify-center items-center p-2 md:p-3 gap-2 md:gap-3">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src={pfp}
            alt="profile"
            className="rounded-full h-[45px] w-[45px] md:h-[50px] md:w-[50px]"
          />
        </div>

        {/* Details and Time Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: menuChecker ? 1 : 0, x: menuChecker ? 0 : -20 }}
          transition={{ duration: 0.2, delay: menuChecker ? 0.3 : 0 }}
          className={menuChecker ? "flex justify-between w-full" : "hidden"}
        >
          {/* Chat Details (Middle) */}
          <div className="flex flex-col overflow-hidden">
            {details.isGroup ? (
              <p className="font-bold text-sm md:text-base truncate">
                {details.name}
              </p>
            ) : (
              <p className="font-bold text-sm md:text-base truncate">
                {details.participants[0]}
              </p>
            )}
            <p className="text-xs md:text-[13px] text-gray-400 truncate">
              {details.lastMessage.text.length > 20
                ? details.lastMessage.text.slice(0, 20) + "..."
                : details.lastMessage.text}
            </p>
          </div>

          {/* Time + Notification (Right) */}
          <div className="flex flex-col items-end justify-between text-xs md:text-[13px] text-gray-400 min-w-[45px] md:min-w-[50px]">
            <p>{details.lastMessage.createdAt.slice(11, 16)}</p>
            {details.unreadCount.user1 > 0 && (
              <p className="bg-sky-600 text-white text-[10px] md:text-[11px] px-1.5 md:px-2 py-[2px] rounded-full">
                {details.unreadCount.user1}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-700 w-[90%] mx-auto"></div>
    </div>
  );
};

export default ChatCard;
