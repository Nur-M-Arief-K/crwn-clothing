import { createAction } from "@reduxjs/toolkit";

import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";

export const fetchCategoriesStart = createAction<
  void,
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
>(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = createAction<
  Category[],
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS
>(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS);

export const fetchCategoriesFailed = createAction<
  Error,
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED
>(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED);
