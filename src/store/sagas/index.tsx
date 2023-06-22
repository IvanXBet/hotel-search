import { all } from "redux-saga/effects";
import { hotelsWatcher } from "./search.saga";

export default function* rootSaga() {
  yield all([hotelsWatcher()]);
}
