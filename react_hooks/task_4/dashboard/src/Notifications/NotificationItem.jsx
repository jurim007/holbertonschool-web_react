import { memo } from "react";

function NotificationItem({
  type = "default",
  html,
  value,
  markNotificationAsRead,
  id,
}) {
  const style = type === "urgent" ? { color: "red" } : { color: "blue" };

  const handleClick = () => {
    if (markNotificationAsRead) {
      markNotificationAsRead(id);
    }
  };

  if (html) {
    return (
      <li
        data-notification-type={type}
        style={style}
        dangerouslySetInnerHTML={html}
        onClick={handleClick}
      />
    );
  }

  return (
    <li data-notification-type={type} style={style} onClick={handleClick}>
      {value}
    </li>
  );
}

export default memo(NotificationItem);
