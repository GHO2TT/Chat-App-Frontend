// import settingsIcon from "./components/icons/settingsSvgIcon.jsx";
import ChatCard from "./components/ChatCard.jsx";
import ChatScreen from "./components/ChatScreen.jsx";
import ChatIcon from "./components/icons/ChatSvgIcon.jsx";

function App() {
  return (
    <>
      <div className="app">
        <div className="chat-list bg-gray-800">
          <div className="flex justify-center items-center md:justify-between border-b-1 p-3 h-[85px]">
            <div className="flex items-center">
              <ChatIcon
                width={43}
                height={43}
                fill={"none"}
                stroke={"white"}
                strokeWidth={2}
              />
              <h1 className="font-bold text-[20px] hidden md:block">Vortex</h1>
            </div>
            <button className="h-[40px] w-[70px] bg-gray-500 rounded-2xl hover:bg-gray-900 cursor-pointer hidden md:block">
              Menu
            </button>
          </div>
          {/* Chats */}
          <div className="chats-lists-section h-[calc(100vh-85px)] overflow-y-auto">
            {/* chat card */}
            <ChatCard />
          </div>
        </div>
        <main className="chat-window bg-gray-600">
          {/* Chat page (right) */}
          <ChatScreen />
        </main>
      </div>
    </>
  );
}

export default App;
