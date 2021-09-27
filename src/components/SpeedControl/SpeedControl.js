import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { storeInstance } from '../..';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

function SpeedControl() {
  const dispatch = useDispatch();
  const speedControl = useSelector(store => store.speedControl)

  const increaseSpeed = () => {
    dispatch({
      type: 'INCREASE_SPEED',
    })
  }

  const decreaseSpeed = () => {
    dispatch({
      type: 'DECREASE_SPEED',
    })
  }
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={increaseSpeed}>Increase Speed</button>
        <p>SPEED: {speedControl}</p>
        <button onClick={decreaseSpeed}>Decrease Speed</button>
      </div>
    );
  
}

export default SpeedControl;