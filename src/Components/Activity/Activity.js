import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Activity() {
  // activityType from URL - /activity/[activityType]
  let { activityType } = useParams();

  // global state
  const firstName = useSelector(state => state.settings.firstName);

  // local state
  let [activityDetails, setActivityDetails] = useState(null);
  let [error, setError] = useState(null);
  let [funAdjective, setFunAdjective] = useState(null);

  const greeting = firstName.length ? `Great news, ${firstName}...` : 'Great news...';
  const funAdjectiveList = ['cool', 'fun', 'exciting', 'awesome', 'rad', 'dope', 'sweet', 'amazing', 'excellent', 'gnarly', 'bodacious', 'fly'];

  // initial load
  useEffect(() => {
    loadData();
  }, [activityType]);

  // view methods
  const loadData = () => {
    populateActivity();
    setRandomAdjective();
  }

  const populateActivity = () => {
    setActivityDetails(null); // reset activity while loading

    axios.get(`http://www.boredapi.com/api/activity?type=${activityType}`)
      .then(res => {
        if (!res.data || res.data.error) {
          setError(res?.data?.error || 'Something went wrong');
          setActivityDetails(null);
        } else {
          setError(null);
          setActivityDetails(res.data);
        }
      });
  }

  const setRandomAdjective = () => {
    let randomAdjective = funAdjectiveList[Math.floor(Math.random() * funAdjectiveList.length)];

    // handle 'a' vs 'an'
    if (['a', 'e', 'i', 'o', 'u'].indexOf(randomAdjective[0]) > -1) {
      randomAdjective = `an ${randomAdjective}`;
    } else {
      randomAdjective = `a ${randomAdjective}`;
    }

    setFunAdjective(randomAdjective);
  }

  return (
    error ? (
      <main>
        <h2>Sorry, there was an error :(</h2>
        <h3>{error}</h3>
        <p>Try using the navigation on the left to select a new activity.</p>
      </main>
    ) : (
      <main>
        <h2>{greeting}</h2>
        <h3>We have {funAdjective} activity for you!</h3>

        <br/>

        <p>
          <strong>Activity Type: </strong>
          { activityDetails?.type || '' }
        </p>

        <p>
          <strong>Activity: </strong>
          { activityDetails?.activity || '' }
        </p>

        <p>
          <strong>Participants: </strong>
          { activityDetails?.participants || '' }
        </p>

        <br/>

        <div>
          Don't love this activity?<br/>
          <button onClick={loadData}>Try a new one!</button>
          { activityDetails === null ? <div className="loader"></div> : '' }
        </div>
      </main>
    )
  )
}