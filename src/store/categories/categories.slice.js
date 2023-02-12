import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    FETCH_CATEGORIES_START: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    FETCH_CATEGORIES_SUCCESS: (state, action) => {
      return { ...state, isLoading: false, categories: action.payload };
    },
    FETCH_CATEGORIES_FAILED: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { reducer: categoriesReducer } = categoriesSlice;