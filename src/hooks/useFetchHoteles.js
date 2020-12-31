import { useEffect, useState } from "react";
import { filtrarHoteles } from "../helpers/FiltroHoteles";


export const useFetchHoteles = (destino) => {

    const [hoteles, setHoteles] = useState([])

    useEffect(() => {
        setHoteles(filtrarHoteles(destino))
    }, [destino])

    return hoteles;
}