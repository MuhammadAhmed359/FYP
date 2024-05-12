import React from 'react';
import './mainp.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Cards from './cards';


// Function to generate wavy data
const generateWavyData = () => {
    const data = [];
    for (let i = 0; i < 14; i++) { // Generating data for 7 days
        data.push({
            name: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'][i],
            anomaly: Math.sin(i / 7 * Math.PI * 2) * 20 + 30, // Sine function to create wavy data
            amt: i * 10, // Incrementing amt value for demonstration
        });
    }
    return data;
};

const data = generateWavyData();

const Mainp = () => {
    return (
        <div>
            <div id='mpbg'>
                <div id='circle2'></div>
                <div id='nav'>
                <div id='circle1'></div>
                    <h1 id='t1'>Anomaly Graph</h1>
                    <div>
                        {/* <div className="btn-group ">
                            <button type="button" className="btn btn-primary-outline">Live</button>
                        </div>
                        <div className="btn-group ">
                            <button type="button" className="btn btn-primary-outline">Week</button>
                        </div> */}
                    </div>
                </div>
                <div id='graph'>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 8,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <defs>
                                <linearGradient id="colorAnomaly" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#f57489" />
                                    <stop offset="100%" stopColor="#5e39ff" />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            {/* Set y-axis domain from 0 to 70 */}
                            <YAxis ticks={[0, 10, 20, 30, 40, 50, 60, 70]} />
                            <Tooltip />
                            <Legend />
                            {/* Change dataKey to "anomaly" */}
                            <Line type="monotone" dataKey="anomaly" stroke="url(#colorAnomaly)" strokeWidth={4} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div> <Cards/></div>

            </div>
        </div>
    );
};

export default Mainp;
