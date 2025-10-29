import pfp from "../assets/download.png";
import ReceiverChatBubble from "./UI/ReceiverChatBubble";
import SenderChatBubble from "./UI/SenderChatBubble";
import SendIcon from "./icons/SendSvgIcon";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChatScreen = ({ loggedInUser, selectedChat }) => {
  const [isLoading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageContent, setMessagecontent] = useState("");

  function handleInputChange(event) {
    setMessagecontent(event.target.value);
  }

  function handleSendMessage() {
    if (!messageContent.trim()) return;
    if (!selectedChat) return;
    const draftedMessage = {
      content: messageContent,
      chatId: selectedChat._id,
      senderId: loggedInUser.name,
    };

    setMessages((prev) => {
      return [...prev, draftedMessage];
    });
    axios
      .post("/api/v1/message", draftedMessage)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setMessagecontent("");
  }

  useEffect(() => {
    setLoading(true);
    if (!selectedChat) return setLoading(false);
    axios
      .get(`/api/v1/message/${selectedChat._id}`)
      .then((res) => {
        setMessages(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [selectedChat]);
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );

  if (!selectedChat) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold text-gray-500">
          Welcome to Vortex!, Select a chat to start messaging.
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col justify-between h-screen">
        {/* Header */}
        <div className="flex items-center p-2 h-[60px] md:h-[70px]">
          <img
            src={pfp}
            alt="profile Picture"
            className="rounded-full h-[40px] w-[40px] md:h-[50px] md:w-[50px] m-1.5 md:m-2"
          />
          <h1 className="font-bold text-base md:text-lg">
            {selectedChat.isGroup
              ? selectedChat.name
              : selectedChat.participants[0]}
          </h1>
        </div>

        {/* Chat area */}
        <motion.div
          key="signup"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="main-chat-screen flex-grow overflow-y-auto scrollbar-hide bg-[#37353E] p-2 md:p-3 rounded-t-lg"
        >
          {messages.map((message) => {
            if (message.senderId === loggedInUser.name) {
              return (
                <SenderChatBubble key={message._id} message={message.content} />
              );
            }
            return (
              <ReceiverChatBubble key={message._id} message={message.content} />
            );
          })}
        </motion.div>

        {/* Input box */}
        <div className="chat border-t border-gray-600">
          <div className="flex justify-center items-center m-2 md:m-3 gap-2">
            <textarea
              type="text"
              value={messageContent}
              onChange={handleInputChange}
              rows={1}
              className="bg-cyan-100 flex-1 p-2 rounded-2xl text-black text-sm md:text-base"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-400 rounded-2xl h-[36px] w-[36px] md:h-[44px] md:w-[60px] hover:bg-green-600 flex justify-center items-center flex-shrink-0"
            >
              <SendIcon
                height={28}
                width={28}
                fill={"none"}
                stroke={"white"}
                className="md:w-[36px] md:h-[36px]"
              />
            </button>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ChatScreen;
