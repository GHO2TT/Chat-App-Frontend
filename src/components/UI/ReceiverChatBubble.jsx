const ReceiverChatBubble = ({ message }) => {
  return (
    <div className="flex justify-start">
      <div className="p-2 m-1 max-w-[300px] rounded-2xl bg-gray-500 text-white">
        {message}
      </div>
    </div>
  );
};

export default ReceiverChatBubble;
