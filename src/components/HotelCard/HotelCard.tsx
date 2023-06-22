import { IHotel } from "../../interface/Hotel.interface"

interface HotelCardProps {
    hotel: IHotel,
    dateStart?: string
    dateEnd?: number
} 
export const HotelCard = ({hotel, dateStart='7 июля 2022', dateEnd=2}: HotelCardProps) =>{
    return (<div>
        <p>{hotel.location.country} {hotel.hotelName}</p>
        <p>{dateStart} {dateEnd}</p>
    </div>)
}