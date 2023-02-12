import { createAction } from "@reduxjs/toolkit";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const fetchCategoriesStart = createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
);

export const fetchCategoriesSuccess = createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  function prepare(categoriesArray) {
    return {
      payload: categoriesArray,
    };
  },
);

export const fetchCategoriesFailure = createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  function prepare(error) {
    return {
      payload: error
    };
  }
);
