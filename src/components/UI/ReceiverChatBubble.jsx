import pfp from "../../assets/download.png";

const ReceiverChatBubble = ({ message }) => {
  return (
    <div className="flex justify-start items-end">
      <img
        src={pfp}
        alt=""
        className="rounded-full h-[24px] w-[24px] md:h-[28px] md:w-[28px] m-1 md:m-1.5"
      />
      <div className="p-2 m-1 max-w-[240px] md:max-w-[280px] rounded-2xl bg-gray-500 text-white text-sm md:text-base">
        {message}
      </div>
    </div>
  );
};

export default ReceiverChatBubble;
