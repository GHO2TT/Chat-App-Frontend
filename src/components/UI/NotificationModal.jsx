const NotificationModal = ({ message, status }) => {
  let statusColor = "bg-green-500";

  if (status === "fail") {
    statusColor = "bg-red-400";
  } else if (status === "warning") {
    statusColor = "bg-yellow-400";
  }
  return (
    <div className="flex justify-center">
      <div
        className={`flex justify-center items-center z-5 absolute ${statusColor} w-[250px] rounded-b-2xl p-2`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default NotificationModal;
