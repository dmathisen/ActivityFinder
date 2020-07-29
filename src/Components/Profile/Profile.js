import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Profile() {
  // global state
  const firstName = useSelector(state => state.settings.firstName);
  const lastName = useSelector(state => state.settings.lastName);
  const emailAddress = useSelector(state => state.settings.emailAddress);
  
  const isProfileValid = firstName.length && lastName.length && emailAddress.length;

  // TODO: user authentication

  return (
    isProfileValid ? (
      <main>
        <h3>{firstName}'s profile</h3>
        
        <div>
          <strong>First Name: </strong>
          { firstName }
        </div>

        <div>
          <strong>Last Name: </strong>
          { lastName }
        </div>

        <div>
          <strong>Email: </strong>
          { emailAddress }
        </div>

        <br/>
        <Link to="/settings">Edit your profile</Link>
      </main>
    ) : (
      <main>
        <h3>Your profile is not set up</h3>
        <p><Link to="/settings">Click here</Link> to get started.</p>
      </main>
    )
  );
}