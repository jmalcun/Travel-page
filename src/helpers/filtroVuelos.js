import {vuelosData} from '../database/dataVuelos.js'


export const filtroVuelos = (origen,destino,tipo) =>{
    return vuelosData.filter(v => v.origen === origen && v.destino === destino && v.tipoV === tipo)
}