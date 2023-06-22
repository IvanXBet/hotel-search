import {
  IHotel,
  IHotelAction,
  IHotelsState,
} from "../../interface/Hotel.interface";

import {
  SEARCH_HOTELS,
  SEARCH_HOTELS_SUCCESS,
  SEARCH_HOTELS_FAILURE,
} from "../constants";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

const initialState: IHotelsState = {
  sliderImg: new Array(3).fill([img1, img2, img3]).flat(),
  hotels: [],
  loading: false,
  error: "",
};

export const hotelsReducer = (state = initialState, action: IHotelAction) => {
  switch (action.type) {
    case SEARCH_HOTELS: {
      return {
        ...state,
        loading: true,
      };
    }
    case SEARCH_HOTELS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload as string,
      };
    }
    case SEARCH_HOTELS_SUCCESS: {
      return {
        ...state,
        hotels: [...(action.payload as IHotel[])],
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
