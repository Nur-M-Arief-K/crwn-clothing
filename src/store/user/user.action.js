import { createAction } from "@reduxjs/toolkit";

import USER_ACTION_TYPES from "./user.types";

export const setCurrentUser = createAction(
  USER_ACTION_TYPES.SET_CURRENT_USER,
  function prepare(user) {
    return {
      payload: user
    };
  }
);

export const checkUserSession = createAction(
  USER_ACTION_TYPES.CHECK_USER_SESSION
);

export const googleSignInStart = createAction(
  USER_ACTION_TYPES.GOOGLE_SIGN_IN_START
);

export const emailSignInStart = createAction(
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  function prepare(email, password) {
    return {
      payload: {
        email,
        password,
      },
    };
  }
);

export const signInSuccess = createAction(
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  function prepare(user) {
    return {
      payload: user
    };
  }
);

export const signInFailed = createAction(
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  function prepare(error) {
    return {
      payload: error
    };
  }
);

export const signUpStart = createAction(
  USER_ACTION_TYPES.SIGN_UP_START,
  function prepare(email, password, displayName) {
    return {
      payload: {
        email,
        password,
        displayName,
      },
    };
  }
);

export const signUpSuccess = createAction(
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  function prepare(user, additionalDetails) {
    return {
      payload: {
        user,
        additionalDetails,
      },
    };
  }
);

export const signUpFailed = createAction(
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  function prepare(error) {
    return {
      payload: error
    };
  }
);

export const signOutStart = createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = createAction(
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  function prepare(error) {
    return {
      payload: error
    };
  }
);
