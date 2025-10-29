import pfp from "../../assets/download.png";

const SenderChatBubble = ({ message }) => {
  return (
    <div className="flex justify-end items-end">
      <div className="p-2 m-1 max-w-[240px] md:max-w-[280px] rounded-2xl bg-blue-500 text-white text-sm md:text-base">
        {message}
      </div>
      <img
        src={pfp}
        alt=""
        className="rounded-full h-[24px] w-[24px] md:h-[28px] md:w-[28px] m-1 md:m-1.5"
      />
    </div>
  );
};

export default SenderChatBubble;
