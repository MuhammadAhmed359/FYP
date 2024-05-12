import React from 'react';
import './live.css';
import NavbarComponent from '../D1/navbar/navbar';

const live = () => {
  return (
    <div>
      <div id='livebg'>
        <div id='livebbg'>
          <NavbarComponent />
          <div id='circle'></div>
          <div id='mbg'>
            <div id='circle_1'></div>
            <div id='circle_2'></div>

            <div id='b1'>
              <div id='box1'>
                <h1>Video:1</h1>
              </div>
              <div id='box2'>
                <h1>Video:2</h1>
              </div>
            </div>
            <div id='b2'>

              <div id='box3'>
                <h1>Video:3</h1>
              </div>
              <div id='box4'>
                <h1>Video:4</h1>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default live;
