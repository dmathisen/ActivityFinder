import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  
  initialState: {
    isLoggedIn: false,
    firstName: '',
    lastName: '',
    emailAddress: ''
  },

  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload.lastName;
    },
    setEmailAddress: (state, action) => {
      state.emailAddress = action.payload.emailAddress;
    },
  },
});

export const { logIn, setFirstName, setLastName, setEmailAddress } = settingsSlice.actions;
export default settingsSlice.reducer;
