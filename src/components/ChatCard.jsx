import pfp from "../assets/download.png";

const ChatCard = () => {
  function handleChatClick() {
    console.log("Clicked");
  }

  return (
    <div
      className="chat-card cursor-pointer hover:bg-gray-950 "
      onClick={handleChatClick}
    >
      <div className="flex items-center justify-center p-2">
        <div className="profile-picture">
          <img
            src={pfp}
            alt="profile Picture"
            className="rounded-[100px] h-[65px] w-[65px]"
          />
        </div>
        <div className="flex">
          {/* <div className="details flex flex-col px-3 hidden md:block">
          <p className="font-bold text-1xl">Full Name</p>
          <p className="text-[12px]">Message description...</p>
        </div> */}
          <div className="hidden md:flex flex-col px-3">
            <p className="font-bold text-1xl">Full Name</p>
            <p className="text-[12px]">Message description...</p>
          </div>

          <div className="time-and-notif hidden md:flex flex-col px-3">
            <p>19:00</p>
            <p className="flex bg-gray-500 rounded-full justify-center">2</p>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-700 w-[calc(100%-20%)] mx-auto"></div>
    </div>
  );
};

export default ChatCard;
