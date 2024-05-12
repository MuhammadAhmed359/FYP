import React from 'react';
import './deluser.css';
import Nav from '../../../components/D1/navbar/navbar';
import Notification from '../../D1/notification/notif';
import Activeu from '../../D1/activeusers/activeu';
import { Link } from 'react-router-dom';
import randomColor from 'randomcolor';

function deluser() {
  // Sample user data array
  const userData = [
    { id: 1, name: 'Mugheez Mir', email: 'Mugheezmir69@gmail.com' },
    { id: 2, name: 'Muhammad Ahmed', email: 'M.Ahmed6969@hotmail.com' },
    { id: 3, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 4, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 5, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 6, name: 'Bob Williams', email: 'bob.williams@example.com' },
    { id: 7, name: 'Emily Brown', email: 'emily.brown@example.com' },
    { id: 8, name: 'Michael Wilson', email: 'michael.wilson@example.com' },
    { id: 4, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 5, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 6, name: 'Bob Williams', email: 'bob.williams@example.com' },
    { id: 7, name: 'Emily Brown', email: 'emily.brown@example.com' },
    { id: 8, name: 'Michael Wilson', email: 'michael.wilson@example.com' },
    { id: 9, name: 'Olivia Taylor', email: 'olivia.taylor@example.com' }
  ];

  // Function to handle user deletion
  const handleDeleteUser = (userId) => {
    // Implement your logic to delete the user with the provided userId
    console.log(`Delete user with id ${userId}`);
  };

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
              {userData.map((user) => (
                <div className='usersbackground' key={user.id}>
                  {/* for icon of every user */}
                  <div className='usericons' style={{ backgroundColor: randomColor() }}></div>
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                  <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default deluser;
