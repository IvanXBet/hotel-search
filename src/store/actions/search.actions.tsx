import { IHotel } from "../../interface/Hotel.interface";
import { ISearchParams } from "../../interface/Search.interface";

import {
  SEARCH_HOTELS,
  SEARCH_HOTELS_SUCCESS,
  SEARCH_HOTELS_FAILURE,
} from "../constants";

export const getHotelsRequest = (payload: ISearchParams) => ({
  type: SEARCH_HOTELS,
  payload,
});

export const getHotelsError = (payload: string) => ({
  type: SEARCH_HOTELS_FAILURE,
  payload,
});

export const getHotelsSuccess = (payload: IHotel[]) => ({
  type: SEARCH_HOTELS_SUCCESS,
  payload,
});
