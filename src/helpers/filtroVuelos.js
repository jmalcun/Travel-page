import {vuelosData} from '../database/dataVuelos.js'


export const filtroVuelos = (origen,destino) =>{
    return vuelosData.filter(v => v.origen === origen && v.destino === destino)
}