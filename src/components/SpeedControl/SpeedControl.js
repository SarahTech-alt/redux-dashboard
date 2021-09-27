import React from 'react';
import {useDispatch} from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

function SpeedControl() {
  const dispatch = useDispatch();

    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick = {(event) => dispatch()}>Increase Speed</button>
        <p>SPEED: GOES HERE</p>
        <button>Decrease Speed</button>
  
      </div>
    )
  
}

export default SpeedControl;