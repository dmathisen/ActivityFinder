import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <main>
      <h2>Hey there!</h2>
      <h3>It looks like you're really bored :(</h3>
      <h4>Let's find an activity for you!</h4>

      <br/>
      <p>First, please <Link to="/settings">fill out your profile</Link>.</p>
      <p>When you're done, select an "Activity" in the left menu and we'll help you find something to do!</p>
    </main>
  );
}