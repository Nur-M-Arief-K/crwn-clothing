import { createAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

import {
  UserData,
  AdditionalInformation,
} from "../../utils/firebase/firebase.utils";
import USER_ACTION_TYPES from "./user.types";

export const setCurrentUser = createAction<
  UserData,
  USER_ACTION_TYPES.SET_CURRENT_USER
>(USER_ACTION_TYPES.SET_CURRENT_USER);

export const checkUserSession = createAction<
  void,
  USER_ACTION_TYPES.CHECK_USER_SESSION
>(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = createAction<
  void,
  USER_ACTION_TYPES.GOOGLE_SIGN_IN_START
>(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = createAction<
  {
    email: string;
    password: string;
  },
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START
>(USER_ACTION_TYPES.EMAIL_SIGN_IN_START);

export const signInSuccess = createAction<
  UserData & { id: string },
  USER_ACTION_TYPES.SIGN_IN_SUCCESS
>(USER_ACTION_TYPES.SIGN_IN_SUCCESS);

export const signInFailed = createAction<
  Error,
  USER_ACTION_TYPES.SIGN_IN_FAILED
>(USER_ACTION_TYPES.SIGN_IN_FAILED);

export const signUpStart = createAction<
  { email: string; password: string; displayName: string },
  USER_ACTION_TYPES.SIGN_UP_START
>(USER_ACTION_TYPES.SIGN_UP_START);

export const signUpSuccess = createAction<
  { user: User; additionalDetails: AdditionalInformation },
  USER_ACTION_TYPES.SIGN_UP_SUCCESS
>(USER_ACTION_TYPES.SIGN_UP_SUCCESS);

export const signUpFailed = createAction<
  Error,
  USER_ACTION_TYPES.SIGN_UP_FAILED
>(USER_ACTION_TYPES.SIGN_UP_FAILED);

export const signOutStart = createAction<
  void,
  USER_ACTION_TYPES.SIGN_OUT_START
>(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = createAction<
  void,
  USER_ACTION_TYPES.SIGN_OUT_SUCCESS
>(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = createAction<
  Error,
  USER_ACTION_TYPES.SIGN_OUT_FAILED
>(USER_ACTION_TYPES.SIGN_OUT_FAILED);