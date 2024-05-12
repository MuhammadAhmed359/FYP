import React from 'react';
import './udashboard.css';
import UserNavbar from '../usernavbar/usernavbar';
// import Alertpopup from './apopup';

const udashboard = () => {
    return (
        <div>
            <div id="ubg">
                <div id='ubbg'>

                    <UserNavbar />
                    <div id='circle'></div>
                    {/* <Alertpopup/> */}
                    <div id='umbg'>
                        <div id='circle_11'></div>
                        <div id='circle_22'></div>

                        <div id='b11'>
                            <div id='box11'>
                                <h1>Video:1</h1>
                            </div>
                            <div id='box22'>
                                <h1>Video:2</h1>
                            </div>
                        </div>
                        <div id='b22'>

                            <div id='box33'>
                                <h1>Video:3</h1>
                            </div>
                            <div id='box44'>
                                <h1>Video:4</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default udashboard;
