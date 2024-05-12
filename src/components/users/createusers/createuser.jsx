import React from 'react';
import './createuser.css';
import Nav from '../../../components/D1/navbar/navbar';
import Notification from '../../D1/notification/notif';
import Activeu from '../../D1/activeusers/activeu';
import { Link } from 'react-router-dom';

function createuser() {
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
                        <div id='formbg'>
                            <form>
                                <div id='names'>
                                    <div className="form-group1">
                                        <label>First Name:</label>
                                        <input type="text" className="form-control" placeholder="First Name" required />
                                    </div>
                                    <div className="form-group2">
                                        <label>Last Name:</label>
                                        <input type="text" className="form-control" placeholder="Last Name" required />
                                    </div>
                                </div>
                                <div id='ep'>


                                    <div className="form-group1">
                                        <label>Email:</label>
                                        <input type="email" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="form-group2">
                                        <label>Password:</label>
                                        <input type="password" className="form-control" placeholder="Password" required />
                                    </div>
                                </div>
                                <div id='button'>

                                    <button type="submit" className="btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default createuser;
