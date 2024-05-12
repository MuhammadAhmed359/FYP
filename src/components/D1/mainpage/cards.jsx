import React, { useState, useEffect } from 'react';
import './cards.css';
import ReactCardFlip from 'react-card-flip';
import { RadialBarChart, RadialBar,  ResponsiveContainer } from 'recharts';

function Cards() {

  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  function flipCard1() {
    setIsFlipped1(!isFlipped1);
  }
  function flipCard2() {
    setIsFlipped2(!isFlipped2);
  }
  function flipCard3() {
    setIsFlipped3(!isFlipped3);
  }
  const data = [
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


  const [percentage0, setPercentage0] = useState(58);
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

  return (
    <div>
      <div id='menu'>
        <h1 id='h1'>User's</h1>
        <h1 id='h2'>Statistics</h1>
        <h1 id='h3'>History</h1>
      </div>
      <div id='cards'>
        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped1}>
          <div className='front' onClick={flipCard1}>
            <h1>Front</h1>
          </div>
          <div className='back' onClick={flipCard1}>
            <h1>Back</h1>
          </div>
        </ReactCardFlip>

        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped2}>
          <div className='front' onClick={flipCard2}>
            <div id='allgraph'>

            
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="100%" barSize={6} data={data}>
                <RadialBar
                  minAngle={15}
                  // label={{ position: 'insideStart', fill: 'white' }}
                  background
                  clockWise
                  dataKey="uv"
                  fill="url(#gradient1)"
                  strokeWidth={0} // Set stroke width
                />
                {/* <Legend /> */}
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="20%" stopColor="#f57489" />
                    <stop offset="80%" stopColor="#5e39ff" />
                  </linearGradient>               
                </defs>
              </RadialBarChart>
            <h1 id='totalperentage'>Total Anomalies: {percentage0}%</h1>
            </ResponsiveContainer>
            </div>
          </div>

          <div className='back' onClick={flipCard2}>
            {/* <h1>Back</h1> */}
            <div id='g2'>
              <div id='g2-1'>
                <div className='sgraph'>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="55%" outerRadius="100%" barSize={5} data={data1}>
                      <RadialBar
                        minAngle={15}
                        // label={{ position: 'insideStart'}}
                        background
                        clockWise
                        dataKey="uv"
                        fill="url(#gradient1)"
                        strokeWidth={0} // Set stroke width
                      />
                      {/* <Legend /> */}
                      <defs>
                        <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="20%" stopColor="#f57489" />
                          <stop offset="80%" stopColor="#5e39ff" />
                        </linearGradient>

                      </defs>
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <h1 id='perentage'>Smoking Anomaly: {percentage1}%</h1>
              </div>

              <div id='g2-2'>
              <div className='sgraph'>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="55%" outerRadius="100%" barSize={5} data={data1}>
                      <RadialBar
                        minAngle={15}
                        // label={{ position: 'insideStart'}}
                        background
                        clockWise
                        dataKey="uv"
                        fill="url(#gradient2)"
                        strokeWidth={0} // Set stroke width
                      />
                      {/* <Legend /> */}
                      <defs>
                        <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="20%" stopColor="blue" />
                          <stop offset="80%" stopColor="lightblue" />
                        </linearGradient>

                      </defs>
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <h1 id='perentage'>Fighting Anomaly: {percentage2}%</h1>                
              </div>
              <div id='g2-3'>
              <div className='sgraph'>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="55%" outerRadius="100%" barSize={5} data={data1}>
                      <RadialBar
                        minAngle={15}
                        // label={{ position: 'insideStart'}}
                        background
                        clockWise
                        dataKey="uv"
                        fill="url(#gradient3)"
                        strokeWidth={0} // Set stroke width
                      />
                      {/* <Legend /> */}
                      <defs>
                        <linearGradient id="gradient3" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="20%" stopColor="red" />
                          <stop offset="80%" stopColor="orange" />
                        </linearGradient>

                      </defs>
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <h1 id='perentage1'>Fire Anomaly: {percentage3}%</h1>
              </div>
            </div>
          </div>
        </ReactCardFlip>

        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped3}>
          <div className='front' onClick={flipCard3}>
            <h1>Front</h1>
          </div>
          <div className='back' onClick={flipCard3}>
            <h1>Back</h1>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default Cards;
