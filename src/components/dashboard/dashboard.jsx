import React from 'react';
import './dashboard.css';
import Nav from '../../components/D1/navbar/navbar';
import Main from '../../components/D1/mainpage/mainp';
import Notification from '../../components/D1/notification/notif';
import Activeuser from '../../components/D1/activeusers/activeu';

const Dashboard = () => {
  return (
    <div>
      <div id="bg">
        <div id='bbg'>

        <Nav />
        <Main />
        <Notification />
        <div id='circle'></div>
        <Activeuser />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
