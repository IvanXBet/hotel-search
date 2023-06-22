import { useSelector } from 'react-redux';
import styles from './Hotels.module.css';
import { RootStore } from '../../store';
import { IHotel } from '../../interface/Hotel.interface';
import { HotelCard } from '../HotelCard/HotelCard';


export const Hotels = () => {
    const {hotels} = useSelector((state: RootStore)=>state.hotelsReducer);

    return (
        <div>
            {hotels.map((value: IHotel)=><HotelCard hotel={value}/>)}
        </div>
    )
}