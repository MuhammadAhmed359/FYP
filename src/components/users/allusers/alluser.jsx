import React from 'react';
import './alluser.css';
import Nav from '../../../components/D1/navbar/navbar';
import Notification from '../../D1/notification/notif';
import Activeu from '../../D1/activeusers/activeu';
import { Link } from 'react-router-dom';
import randomColor from 'randomcolor';

function AllUser() {
  // Sample user data array
  const userData = [
    { name: 'Mugheez Mir', email: 'Mugheezmir69@gmail.com', online: true },
    { name: 'Muhammad Ahmed', email: 'M.Ahmed6969@hotmail.com', online: false },
    { name: 'John Doe', email: 'john.doe@example.com', online: true },
    { name: 'Jane Smith', email: 'jane.smith@example.com', online: false },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', online: true },
    { name: 'Bob Williams', email: 'bob.williams@example.com', online: true },
    { name: 'Emily Brown', email: 'emily.brown@example.com', online: false },
    { name: 'Michael Wilson', email: 'michael.wilson@example.com', online: true },
    { name: 'Olivia Taylor', email: 'olivia.taylor@example.com', online: false },
    { name: 'Mugheez Mir', email: 'Mugheezmir69@gmail.com', online: true },
    { name: 'Muhammad Ahmed', email: 'M.Ahmed6969@hotmail.com', online: false },
    { name: 'John Doe', email: 'john.doe@example.com', online: true },
    { name: 'Jane Smith', email: 'jane.smith@example.com', online: false },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', online: true },
    { name: 'Bob Williams', email: 'bob.williams@example.com', online: true },
    { name: 'Emily Brown', email: 'emily.brown@example.com', online: false },
    { name: 'Michael Wilson', email: 'michael.wilson@example.com', online: true },
    { name: 'Olivia Taylor', email: 'olivia.taylor@example.com', online: false }
  ];

  // Generate random color for user icons
  

  return (
    <div>
      <div id='allubg'>

        <Nav />
        <div id='circle'></div>
        <Notification />
        <Activeu />
        <div id='allbg'>
          <div className='c_1'></div>
          <div className='c_2'></div>
          <div id='mainnavebar'>
            <div className="users-menu">
              <ul>
                <li>
                  <Link to="/User">All User's</Link>
                </li>
                <li>
                  <Link to="/Active_User">Active User's</Link>
                </li>
                <li><Link to="/Modify_User">Modify User's</Link></li>
                <li><Link to="/New_User">Create New User's</Link></li>
                <li><Link to="/Remove_User">Remove User's</Link></li>
              </ul>
            </div>
          </div>
          <div id='mainp'>
            <form className="d-flex flex-grow-1 justify-content-center">
              <input
                type="search"
                placeholder="Search Here..."
                aria-label="Search"
                className="form-controlsrch"
              />
            </form>
            <div>
              {/* Displaying user data */}
              {userData.map((user, index) => (
                <div className='usersbackground' key={index}>
                  {/* for icon of every user */}
                  <div className='usericons' style={{ backgroundColor: randomColor() }}></div>
                  <span >{user.name}</span>
                  <span>{user.email}</span>
                  <span>{user.online ? 'Online' : 'Offline'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
       </div>

    </div>
  );
}

export default AllUser;
