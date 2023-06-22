import { IHotel } from "../../interface/Hotel.interface";
import { axiosInstance } from "../../utils/axios";

export const searchHotels = async (): Promise<IHotel> => {
  const { data } = await axiosInstance.get(
    `${process.env.REACT_APP_API_URL}?location=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&currency=rub&checkIn=2023-06-20&checkOut=2023-08-20&limit=50`
  );
  return data;
};
