import React, { useState } from 'react';
import './history.css';
import Nav from '../D1/navbar/navbar';
import Notification from '../D1/notification/notif';
import Activeu from '../D1/activeusers/activeu';

function History() {
    const userData = [
        { type: 'Fire Anomaly', severity: 'Medium', time: '12:45' },
        { type: 'Smoking Anomaly', severity: 'High', time: '01:00' },
        { type: 'Fighting Anomaly', severity: 'Low', time: '01:30' },
        { type: 'Fire Anomaly', severity: 'Medium', time: '12:45' },
        { type: 'Smoking Anomaly', severity: 'High', time: '01:00' },
        { type: 'Fighting Anomaly', severity: 'Low', time: '01:30' },
        { type: 'Fire Anomaly', severity: 'Medium', time: '12:45' },
        { type: 'Smoking Anomaly', severity: 'High', time: '01:00' },
        { type: 'Fighting Anomaly', severity: 'Low', time: '01:30' },
        { type: 'Fire Anomaly', severity: 'Medium', time: '12:45' },
        { type: 'Smoking Anomaly', severity: 'High', time: '01:00' },
        { type: 'Fighting Anomaly', severity: 'Low', time: '01:30' },
    ];

    const [expandedStates, setExpandedStates] = useState(Array(userData.length).fill(false));

    const handleViewClick = (index) => {
        const newExpandedStates = [...expandedStates];
        newExpandedStates[index] = !newExpandedStates[index];
        setExpandedStates(newExpandedStates);
    };

    return (
        <div>
            <div id='historybg'>
                <Nav />
                <div id='circle'></div>
                <Notification />
                <Activeu />
                <div id='hbg'>
                    <div id='cr1'></div>
                    <div id='cr2'></div>
                    <div id='hmain'>
                        <div id='menub'>
                            <h1>Types</h1>
                            <h1>Severity</h1>
                            <h1>Time</h1>
                            <h1>Video</h1>
                        </div>
                        <div>
                            {/* Displaying history data */}
                            {userData.map((user, index) => (
                                <div className={expandedStates[index] ? 'historybackground expanded' : 'historybackground'} key={index}>
                                    <div className='htxt'>
                                        <span >{user.type}</span>
                                        <span>{user.severity}</span>
                                        <span>{user.time }</span>
                                        <button id='vbtn' onClick={() => handleViewClick(index)}>View</button>
                                    </div>
                                    <div className='videobg'>
                                        <h1>hello</h1>
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

export default History;
