import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { CarDisponible } from '../components/car/CarDisponible';
import { CarRental } from '../components/car/CarRental';
import { Contacto } from '../components/Contacto';
import { FindFlight } from '../components/flight/FindFlight';
import { FlightDisponible } from '../components/flight/FlightDisponible';
import { HomeScreen } from '../components/HomeScreen';
import { FindHotel } from '../components/hotels/FindHotel';
import { HotelDisponible } from '../components/hotels/HotelDisponible';
import { HotelSelect } from '../components/hotels/HotelSelect';
import { Navbar } from '../components/Navbar';
import { Nosotros } from '../components/Nosotros';
import { Servicios } from '../components/Servicios';
import { Tours } from '../components/tours/Tours';



export const AppRouter = () => {


    return (
        <>
           <Router>
               <Navbar />
                <Switch>
                    <Route exact path="/home" component={HomeScreen}/>
                    <Route exact path="/nosotros" component={Nosotros}/>
                    <Route exact path="/servicios" component={Servicios}/>
                    <Route exact path="/contacto" component={Contacto}/>
                    <Route exact path="/hotel" component={FindHotel}/>
                    <Route exact path="/flight" component={FindFlight}/>
                    <Route exact path="/car" component={CarRental}/>
                    <Route exact path="/tours" component={Tours}/>
                    <Route exact path="/find-hotel" component={HotelDisponible} />
                    <Route exact path="/find-hotel/:hotelId/:fechaIngreso/:fechaSalida" component={HotelSelect} />
                    <Route exact path="/find-flight" component={FlightDisponible} />
                    <Route exact path="/find-car" component={CarDisponible} />
                    <Redirect to="/home"/>
                </Switch>
            
            </Router> 
        </>
    )
}
