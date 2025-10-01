import pfp from "../../assets/download.png";

const SenderChatBubble = ({ message }) => {
  return (
    <div className="flex justify-end items-end">
      <div className="p-2 m-1 max-w-[300px] rounded-2xl bg-blue-500 text-white">
        {message}
      </div>
      <img src={pfp} alt="" className="rounded-full h-[30px] w-[30px] m-2" />
    </div>
  );
};

export default SenderChatBubble;
