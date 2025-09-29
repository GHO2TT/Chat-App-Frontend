import pfp from "../assets/download.png";
import ReceiverChatBubble from "./UI/ReceiverChatBubble";
import SenderChatBubble from "./UI/SenderChatBubble";

const ChatScreen = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      {/* Header */}
      <div className="flex items-center p-2 h-[85px] border-b border-gray-600">
        <img
          src={pfp}
          alt="profile Picture"
          className="rounded-full h-[50px] w-[50px] m-2"
        />
        <h1 className="font-bold text-[20px]">Full Name</h1>
      </div>

      {/* Chat area */}
      <div className="main-chat-screen flex-grow overflow-y-auto scrollbar-hide bg-gray-700 p-3 rounded-lg">
        <ReceiverChatBubble message={"Hey!"} />

        <SenderChatBubble
          message={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minusvoluptatibus deleniti eos est itaque consequuntur culpa laborum deserunt architecto porro perspiciatis quas sequi, animi totam eligendi aspernatur dignissimos iusto vel"
          }
        />
        <SenderChatBubble
          message={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minusvoluptatibus deleniti eos est itaque consequuntur culpa laborum deserunt architecto porro perspiciatis quas sequi, animi totam eligendi aspernatur dignissimos iusto vel"
          }
        />
        <SenderChatBubble
          message={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minusvoluptatibus deleniti eos est itaque consequuntur culpa laborum deserunt architecto porro perspiciatis quas sequi, animi totam eligendi aspernatur dignissimos iusto vel"
          }
        />
        <ReceiverChatBubble message={"That's cool!"} />
      </div>

      {/* Input box */}
      <div className="chat border-t border-gray-600">
        <div className="flex justify-center items-center m-3">
          <input
            type="text"
            className="bg-cyan-100 w-[80%] p-2 rounded-2xl text-black"
            placeholder="Type a message..."
          />
          <button className="ml-2 bg-green-400 rounded-2xl h-[40px] w-[70px] hover:bg-green-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
