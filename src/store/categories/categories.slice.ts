import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Category } from './categories.types';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    FETCH_CATEGORIES_START: (state) => {
      return ({ ...state, isLoading: true });
    },
    FETCH_CATEGORIES_SUCCESS: (state, action: PayloadAction<Category[]>) => {
      return ({ ...state, categories: action.payload, isLoading: false });
    },
    FETCH_CATEGORIES_FAILED: (state, action: PayloadAction<Error>) => {
      return ({ ...state, error: action.payload, isLoading: false });
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { reducer: categoriesReducer } = categoriesSlice;