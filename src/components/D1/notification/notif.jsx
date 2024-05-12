import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './notif.css';

const Notif = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, name: 'John', time: '10:30 AM', message: 'Hey there! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet, arcu sit amet tincidunt ultricies, neque dolor accumsan felis, non tristique lorem erat vitae nibh.', expanded: false },
    { id: 2, name: 'Alice', time: '11:45 AM', message: 'Meeting at 2 PM', expanded: false },
    { id: 3, name: 'Bob', time: '2:15 PM', message: 'Don\'t forget to submit the report', expanded: false },
    { id: 4, name: 'Ahmed', time: '2:15 PM', message: 'Hello!', expanded: false },
    { id: 5, name: 'Mugheez', time: '2:15 PM', message: 'Hi!', expanded: false },
    { id: 6, name: 'Naseeb', time: '2:15 PM', message: 'Hello!', expanded: false },
    { id: 7, name: 'Ali', time: '2:15 PM', message: 'Hey there!', expanded: false }
  ]);

  const handleNotificationClick = (id) => {
    setNotifications(notifications.map(notification => {
      if (notification.id === id) {
        return { ...notification, expanded: !notification.expanded };
      } else {
        return notification;
      }
    }));
  };

  return (
    <div>
      <div id='nfbg'>
        <h1 id='n1'>
          Notifications
          <FontAwesomeIcon icon={faBell} className='notification-icon' />
        </h1>
        <div className='card-container'>
          {notifications.map(notification => (
            <div key={notification.id} className='notification' onClick={() => handleNotificationClick(notification.id)}>
              <div className='notification-header'>
                <span className='notification-name'>{notification.name}</span>
                <span className='notification-time'>{notification.time}</span>
              </div>
              {notification.expanded &&
                <div className='notification-message'>{notification.message}</div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notif;
