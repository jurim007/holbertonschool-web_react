import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications({ notifications = [] }) {
  return (
    <div className="notifications">
      <button
        style={{ float: 'right' }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.map((n) => (
          <NotificationItem
            key={n.id}
            type={n.type}
            value={n.value}
            html={n.html}
          />
        ))}
      </ul>
    </div>
  );
}

export default Notifications;