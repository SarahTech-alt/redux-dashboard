import React from 'react';
import { useSelector } from 'react-redux';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

function Dashboard() {
  // Access reducers from the store
  const passengerList = useSelector(store => store.passengerList);
  const speedControl = useSelector(store => store.speedControl);
  // Find length of passenger array
  const passengerListLength = passengerList.length;

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Display speed from the reducer */}
      <p>SPEED: {speedControl}</p>
      <p>PASSENGER COUNT: {passengerListLength}</p>
    </div>
  );
}

export default Dashboard;
