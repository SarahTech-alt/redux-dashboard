import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

function Passengers() {
  // access modules from imports
  // dispatch will allow dispatching to the store
  // selector lets us access the store to display
  const dispatch = useDispatch();
  const passengerList = useSelector(store => store.passengerList);
  // create a variable to hold change
  // based on user input and to dispatch to 
  // the store 
  const [passengerToAdd, setPassengerToAdd] = useState('');

  const addPassenger = () => {
    if (passengerToAdd === '') {
      alert('cannot be blank');
    } else {
      event.preventDefault();
      dispatch({
        type: 'ADD_PASSENGER',
        payload: passengerToAdd,
      })
      setPassengerToAdd('');
    }
  }

  return (
    <div>
      <h2>Passengers</h2>
      {/* on input change set the passengerToAdd variable equal
        to the input value */}
      <input type="text" 
      name="name" 
      placeholder="Enter Name" 
      value={passengerToAdd} 
      onChange={(event) => setPassengerToAdd(event.target.value)} />
      {/* When the button is clicked call
      addPassenger function which dispatches to the store
      Then map over the passengerList
      that was selected from the store
      to display on page */}
      <button onClick={addPassenger}>Add Passenger</button>
      <ul>PASSENGER LIST:  {passengerList.map((person, index) =>
        <li key={index}>
          {person}
        </li>
      )}
      </ul>

    </div>
  )

}

export default Passengers;