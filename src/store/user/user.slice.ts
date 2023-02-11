import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {
    SIGN_IN_SUCCESS: (state, action: PayloadAction<UserData & {id: string}>) => {
      return ({ ...state, currentUser: action.payload });
    },
    SIGN_IN_FAILED: (state, action: PayloadAction<Error>) => {
      return ({ ...state, error: action.payload });
    },
    SIGN_OUT_SUCCESS: (state) => {
      return ({ ...state, currentUser: null });
    },
    SIGN_OUT_FAILED: (state, action: PayloadAction<Error>) => {
      return ({ ...state, error: action.payload });
    },
    SIGN_UP_FAILED: (state, action: PayloadAction<Error>) => {
      return ({ ...state, error: action.payload });
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { reducer: userReducer } = userSlice;