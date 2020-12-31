import { hotelsData } from "../database/dataHoteles";


export const filtroHotelById = (id) =>{

    return hotelsData.find( hotel => hotel.id === id);
}