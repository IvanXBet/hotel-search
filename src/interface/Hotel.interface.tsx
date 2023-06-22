import { ISearchParams } from "./Search.interface";

export interface IHotel {
  hotelId: number;
  hotelName: string;
  stars: number;
  priceAvg: number;
  priceFrom: number;
  location: {
    name: string;
    country: string;
  };
  isFavorite: boolean;
}

export interface IHotelsState {
  sliderImg: string[];
  hotels: IHotel[];
  loading: boolean;
  error: string;
}

export interface IHotelAction {
  type: string;
  payload: IHotel[] | string | ISearchParams;
}
