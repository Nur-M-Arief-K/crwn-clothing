import { takeLatest } from "redux-saga/effects";
import { onFetchCategories, fetchCategoriesAsync } from "./categories.saga";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

describe("onFetchCategories saga tests", () => {
  test(`should trigger on ${CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS}`, () => {
    const generator = onFetchCategories();
    const expectedResult = takeLatest(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
      fetchCategoriesAsync
    );

    expect(generator.next().value).toEqual(expectedResult);
  });
});
