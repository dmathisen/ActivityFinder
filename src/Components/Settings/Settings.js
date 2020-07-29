import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logIn, setFirstName, setLastName, setEmailAddress } from './settingsSlice';

export default function Settings() {
  let history = useHistory();
  const dispatch = useDispatch();

  // global state
  const isLoggedIn = useSelector(state => state.settings.isLoggedIn);
  const firstName = useSelector(state => state.settings.firstName);
  const lastName = useSelector(state => state.settings.lastName);
  const emailAddress = useSelector(state => state.settings.emailAddress);

  // events
  const handleChange = e => {
    switch(e.target.name) {
      case 'firstName':
        dispatch(setFirstName({ firstName: e.target.value }));
        break;
      case 'lastName':
        dispatch(setLastName({ lastName: e.target.value }));
        break;
      case 'emailAddress':
        dispatch(setEmailAddress({ emailAddress: e.target.value }));
        break;
      default:
          return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    history.push("/profile");
  }

  return (
    isLoggedIn ? (
      <main>
        <h2>{firstName.length ? `${firstName}'s profile` : 'Set up your profile'}</h2>
        <br/>
        
        <form onSubmit={handleSubmit} className="form-settings">
          <p>
            <span>First Name</span>
            <input type="text" name="firstName" value={firstName} onChange={handleChange} required />
          </p>

          <p>
            <span>Last Name</span>
            <input type="text" name="lastName" value={lastName} onChange={handleChange} required />
          </p>

          <p>
            <span>Email</span>
            <input type="email" name="emailAddress" value={emailAddress} onChange={handleChange} required />
          </p>
          
          <br /><br/>
          <button type="submit">Submit</button>
        </form>
      </main>
    ) : (
      <main>
        <h3>You must be logged in to edit your profile</h3>
        <button type="submit" onClick={() => { dispatch(logIn()) }}>Log In</button>
      </main>
    )
    
  );
}