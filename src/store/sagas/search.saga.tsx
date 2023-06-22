import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { searchHotels } from "../api/search.api";
import { IHotel } from "../../interface/Hotel.interface";
import { getHotelsError, getHotelsSuccess } from "../actions/search.actions";
export function* fetchSearch() {
  try {
    const hotels: IHotel[] = yield call(searchHotels);
    yield put(getHotelsSuccess(hotels));
  } catch (e: any) {
    yield put(getHotelsError(e.message as string));
  }
}

export function* hotelsWatcher() {
  yield takeEvery("SEARCH_HOTELS", fetchSearch);
}
