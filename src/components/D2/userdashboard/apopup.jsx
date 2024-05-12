import React, { useState } from 'react';
import './apopup.css';

function Apopup({ anomalyName, anomalyTime, anomalySeverity, anomalyDay }) {
    const [expanded, setExpanded] = useState(false);

    const toggleHeight = () => {
        setExpanded(!expanded);
    };


    // Function to generate dummy anomaly data
    const getDummyAnomalyData = () => {
        const dummyData = {
            name: 'Smoking Anomaly Detected',
            time: '12:45 PM',
            severity: 'Medium',
            day: 'Wednesday'
        };
        return dummyData;
    };

    // Retrieve dummy data using the function
    const { name, time, severity, day } = getDummyAnomalyData();

    return (
        <div>
            <div id='alertpop' style={{ height: expanded ? '340px' : '150px' }}>
                <h1 id='heading'>Anomaly Detected</h1>
                <button id='popbtn' onClick={toggleHeight}>
                    {expanded ? 'Hide Detail' : 'View Detail'}
                </button>
                {/* Additional content to hide/show */}
                {expanded && (
                    <div id='aa'>
                        <div id='a1'>
                            <h1>{name}</h1>
                            <h1>{time}</h1>
                        </div>
                        <div id='a2'>
                            <h1>Severity: {severity}</h1>
                            <h1>{day}</h1>
                        </div>
                        <div id='a3'>
                            <button>Respond</button>
                            <button>Ignore</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Apopup;
