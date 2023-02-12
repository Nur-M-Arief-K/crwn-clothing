import { createSlice } from "@reduxjs/toolkit";

import USER_ACTION_TYPES from "./user.types";

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const isFailed = (action) => {
  return (
    (action.type === USER_ACTION_TYPES.SIGN_OUT_FAILED) |
      (action.type === USER_ACTION_TYPES.SIGN_IN_FAILED) |
      (action.type === USER_ACTION_TYPES.SIGN_UP_FAILED) && true
  );
};

const userSlice = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {
    SIGN_UP_SUCCESS: () => {
      alert("sign up success!");
    },
    SIGN_IN_SUCCESS: (state, action) => {
      alert("sign in success!");
      return { ...state, currentUser: action.payload };
    },
    SIGN_OUT_SUCCESS: (state) => {
      alert("sign out success!");
      return { ...state, currentUser: null };
    },
    SIGN_UP_FAILED: () => {
      alert("oops, sign up is failed!");
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isFailed, (state, action) => {
        // to inform user
        switch (action.payload.code) {
          case "auth/user-not-found":
            alert("user not found");
            break;
          case "auth/wrong-password":
            alert("incorrect password for email");
            break;
          default:
            alert("oops, sign in is failed");
        }
        return { ...state, error: action.payload };
      })
      .addDefaultCase((state) => state);
  },
});

export const { reducer: userReducer } = userSlice;
