import { IHotel } from "../../interface/Hotel.interface";
import { HouseIcon } from "../icons";
import styles from "./style.css";

interface HotelCardProps {
    hotel: IHotel,
    dateStart?: string
    dateEnd?: number
} 
export const HotelCard = ({hotel, dateStart='7 июля 2022', dateEnd=2}: HotelCardProps) =>{
    return (<div>
        <p>{hotel.location.country} {hotel.hotelName}</p>
        <p>{dateStart} {dateEnd}</p>
        <HouseIcon/>
    </div>)
}