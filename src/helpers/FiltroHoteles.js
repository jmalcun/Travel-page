import {hotelsData} from '../database/dataHoteles'


export const filtrarHoteles = (destino) => {
    return hotelsData.filter(h => h.city === destino)
}