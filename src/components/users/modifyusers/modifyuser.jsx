import React, { useState } from 'react';
import './modifyuser.css';
import Nav from '../../../components/D1/navbar/navbar';
import Notification from '../../D1/notification/notif';
import Activeu from '../../D1/activeusers/activeu';
import { Link } from 'react-router-dom';
import randomColor from 'randomcolor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function ModifyUser() {
  // Sample user data array
  const [expandedUsers, setExpandedUsers] = useState([]);

  const toggleExpand = (index) => {
    const newExpandedUsers = [...expandedUsers];
    newExpandedUsers[index] = !newExpandedUsers[index];
    setExpandedUsers(newExpandedUsers);
  };

  const userData = [
    { name: 'Mugheez  Mir', email: 'Mugheezmir69@gmail.com' },
    { name: 'Muhammad Ahmed', email: 'M.Ahmed6969@hotmail.com' },
    { name: 'Naseeb Ahmad', email: 'Naseebmian69@gmail.com' },
    { name: 'Mugheez  Mir', email: 'Mugheezmir69@gmail.com' },
    { name: 'Muhammad Ahmed', email: 'M.Ahmed6969@hotmail.com' },
    { name: 'Naseeb Ahmad', email: 'Naseebmian69@gmail.com' },
    { name: 'Mugheez  Mir', email: 'Mugheezmir69@gmail.com' },
    { name: 'Muhammad Ahmed', email: 'M.Ahmed6969@hotmail.com' },
    { name: 'Naseeb Ahmad', email: 'Naseebmian69@gmail.com' },
    { name: 'Mugheez  Mir', email: 'Mugheezmir69@gmail.com' },
    { name: 'Muhammad Ahmed', email: 'M.Ahmed6969@hotmail.com' },
    { name: 'Naseeb Ahmad', email: 'Naseebmian69@gmail.com' }
  ];

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
                <div className={`usersbackground ${expandedUsers[index] ? 'expanded' : ''}`} key={index}>
                  {/* for icon of every user */}
                  <div id='utxt'>
                    <div className='usericons' style={{ backgroundColor: randomColor() }}></div>
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                    <button className="arrow-button" onClick={() => toggleExpand(index)}>
                      <FontAwesomeIcon icon={expandedUsers[index] ? faAngleDown : faAngleRight} />
                    </button>
                  </div>
                  <div id='pformbg' className={expandedUsers[index] ? 'visible' : 'hidden'}>
                    {/* Input form for new password, confirm password, and submit button */}
                    <form>
                      <div id='form'>
                      <div className='form-g1'>
                      <label>New Password:</label>
                      <input type="password" className="form-control" placeholder="New Password" />
                      </div>
                      <div className='form-g2'>
                      <label>Confirm Password:</label>
                      <input type="password" className="form-control" placeholder="Confirm Password" />
                      </div>
                      <button className="mbtn" type="submit">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifyUser;
