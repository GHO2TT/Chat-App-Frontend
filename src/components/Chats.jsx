import React from "react";
import ChatCard from "./ChatCard.jsx";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";

const Chats = ({ toggleMenu, isOpen, selectedChat }) => {
  const [isLoading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/v1/chat").then((res) => {
      setChats(res.data);
      setLoading(false);
    });
  }, []);
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );

  return (
    <div className="chats-lists-section h-[calc(100vh-120px)] md:h-[calc(100vh-140px)] w-[100%] overflow-y-auto">
      {chats.map((chat) => {
        return (
          <ChatCard
            key={chat._id}
            details={chat}
            selectedChat={selectedChat}
            closeMenu={toggleMenu}
            menuChecker={isOpen}
          />
        );
      })}
    </div>
  );
};

export default Chats;
