const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex gap-2 p-2 shadow-sm">
      <img
        className="h-7"
        src="https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png"
        alt="user-icon"
      />
      <span className="font-bold px-1">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessages;
