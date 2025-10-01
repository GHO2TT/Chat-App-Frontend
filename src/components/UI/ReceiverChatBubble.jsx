import pfp from "../../assets/download.png";

const ReceiverChatBubble = ({ message }) => {
  return (
    <div className="flex justify-start items-end">
      <img src={pfp} alt="" className="rounded-full h-[30px] w-[30px] m-2" />
      <div className="p-2 m-1 max-w-[300px] rounded-2xl bg-gray-500 text-white">
        {message}
      </div>
    </div>
  );
};

export default ReceiverChatBubble;
