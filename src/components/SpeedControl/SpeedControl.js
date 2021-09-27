import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED



function SpeedControl() {
  // access modules from imports
  // dispatch will allow dispatching to the store
  // selector lets us access the store to display
  const dispatch = useDispatch();
  const speedControl = useSelector(store => store.speedControl)

  // on increase speed button click
  // send an action to the store
  // to increase the speed
  const increaseSpeed = () => {
    dispatch({
      type: 'INCREASE_SPEED',
    })
  }

  // on decrease speed button click
  // send an action to the store
  // to decrease the speed
  const decreaseSpeed = () => {
    dispatch({
      type: 'DECREASE_SPEED',
    })
  }
  return (
    <div>
      <h2>Speed Control</h2>
      {/* on button clicks call relevant function */}
      <button onClick={increaseSpeed}>Increase Speed</button>
      <p>SPEED: {speedControl}</p>
      <button onClick={decreaseSpeed}>Decrease Speed</button>
    </div>
  );

}

export default SpeedControl;