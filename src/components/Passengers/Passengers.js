import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
import { storeInstance } from '../..';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

function Passengers() {
    const dispatch = useDispatch();
    const passengerList = useSelector(store => store.passengerList);
    const [passengerToAdd, setPassengerToAdd] = useState('');
    
    const addPassenger = () => {
      event.preventDefault();
      dispatch({
        type: 'ADD_PASSENGER',
        payload: passengerToAdd,
      })
    }
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" value={passengerToAdd} onChange={(event) => setPassengerToAdd(event.target.value)} />
        <button onClick={addPassenger}>Add Passenger</button>

        <ul>PASSENGER LIST:  {passengerList.map(person => {
        <li>
          {person}
        </li>
        })}
        </ul>
      
      </div>
    )
  
}

export default Passengers;