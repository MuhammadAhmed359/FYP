import React, { useState, useEffect } from 'react';
import './Stat.css'
import Nav from '../D1/navbar/navbar'
import Notification from '../D1/notification/notif'
import Activeu from '../D1/activeusers/activeu'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, RadialBarChart, RadialBar, BarChart, Bar,  ResponsiveContainer } from 'recharts';




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

const bardata = [
    {
        name: 'Smoking',
        uv: 60,
        fill: "url(#gradientColor1)",
    },
    {
        name: 'Fire',
        uv: 50,
        fill: "url(#gradientColor2)",

    },
    {
        name: 'Fighting',
        uv: 40,
        fill: "url(#gradientColor3)",

    },

];






function Statistics() {

    const [percentage0, setPercentage0] = useState(68);
    const [percentage1, setPercentage1] = useState(100);
    const [percentage2, setPercentage2] = useState(80);
    const [percentage3, setPercentage3] = useState(60);


    useEffect(() => {
        // Assume you have an API endpoint to fetch the percentage value
        fetch('your-backend-api-endpoint')
            .then(response => response.json())
            .then(data => {
                // Assuming your data contains a 'percentage' field
                setPercentage0(data.percentage0);
                setPercentage1(data.percentage1);
                setPercentage2(data.percentage2);
                setPercentage3(data.percentage3);

            })
            .catch(error => {
                console.error('Error fetching percentage:', error);
            });
    }, []);


    const data0 = [
        {
            uv: 1,
            fill:"url(#gradient1)",

        },
        {
            uv: 2,
            fill:"url(#gradient2)",


        },
        {
            uv: 3,
            fill:"url(#gradient3)",

        },
    ];

    const data1 = [
        {
            // name: 'Smoking Anomaly',
            uv: 1,
        },
    ];

    return (
        <div>
            <div id='statisticsbg'>
                <Nav />
                <div id='circle'></div>
                <Notification />
                <Activeu />
                <div id='sbg'>
                    <div id='cr1'></div>
                    <div id='cr2'></div>
                    <div id='allstatbg'>
                        <div id='s1'>
                            <div className='sg'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadialBarChart cx="50%" cy="50%" innerRadius="55%" outerRadius="100%" barSize={5} data={data1}>
                                        <RadialBar
                                            minAngle={15}
                                            background
                                            clockWise
                                            dataKey="uv"
                                            fill="url(#gradient1)"
                                            strokeWidth={0}
                                        />
                                        <defs>
                                            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="20%" stopColor="#f57489" />
                                                <stop offset="80%" stopColor="#5e39ff" />
                                            </linearGradient>

                                        </defs>
                                    </RadialBarChart>
                                </ResponsiveContainer>
                            </div>
                            <h1 id='spercent1'>Smoking Anomaly: {percentage1}%</h1>
                            <div id='bar1'></div>
                        </div>
                        <div id='s2'>
                            <div className='sg'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadialBarChart cx="50%" cy="50%" innerRadius="55%" outerRadius="100%" barSize={5} data={data1}>
                                        <RadialBar
                                            minAngle={15}
                                            background
                                            clockWise
                                            dataKey="uv"
                                            fill="url(#gradient2)"
                                            strokeWidth={0}
                                        />
                                        <defs>
                                            <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="20%" stopColor="blue" />
                                                <stop offset="80%" stopColor="lightblue" />
                                            </linearGradient>

                                        </defs>
                                    </RadialBarChart>
                                </ResponsiveContainer>
                            </div>
                            <h1 id='spercent2'>Fire Anomaly: {percentage2}%</h1>
                            <div id='bar2'></div>
                        </div>
                        <div id='s3'>
                            <div className='sg'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadialBarChart cx="50%" cy="50%" innerRadius="55%" outerRadius="100%" barSize={5} data={data1}>
                                        <RadialBar
                                            minAngle={15}
                                            background
                                            clockWise
                                            dataKey="uv"
                                            fill="url(#gradient3)"
                                            strokeWidth={0}
                                        />
                                        <defs>
                                            <linearGradient id="gradient3" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="20%" stopColor="red" />
                                                <stop offset="80%" stopColor="orange" />
                                            </linearGradient>

                                        </defs>
                                    </RadialBarChart>
                                </ResponsiveContainer>
                            </div>
                            <h1 id='spercent3'>Fighting Anomaly: {percentage3}%</h1>
                            <div id='bar3'></div>
                        </div>
                    </div>
                    <div id='statbg'>
                        <div id='spiralsatabg'>
                            <div id='tpresentage'>
                                <h1>Anomaly Analysis</h1>
                                <h2>{percentage0}%</h2>
                                <h3>Total Anomalies Detected</h3>
                            </div>
                            <div id='allsgraph'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="100%" barSize={6} data={data0}>
                                        <RadialBar
                                            minAngle={15}
                                            background
                                            clockWise
                                            dataKey="uv"
                                            // fill="url(#gradient1)"
                                            strokeWidth={0}
                                        />
                                       
                                    </RadialBarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div id='barstatbg'>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={bardata}
                                    margin={{
                                        top: 5,
                                        right: 50,
                                        left: 10,
                                        bottom: 5,
                                    }}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis ticks={[0,10,20,30,40,50,60,70]}/>
                                    <Tooltip />
                                    <Bar dataKey="uv" 
                                    // fill="url(#gradientColor)" 
                                    barSize={25} 
                                    />
                                    <defs>
                                        <linearGradient id="gradientColor1" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="20%" stopColor="#f57489" />
                                            <stop offset="80%" stopColor="#5e39ff" />
                                        </linearGradient>

                                        <linearGradient id="gradientColor2" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="20%" stopColor="blue" />
                                            <stop offset="80%" stopColor="lightblue" />
                                        </linearGradient>
                                        <linearGradient id="gradientColor3" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="20%" stopColor="red" />
                                            <stop offset="80%" stopColor="orange" />
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div id='linegraph'>
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
                </div>
            </div>
        </div>
    )
}

export default Statistics
