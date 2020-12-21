import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { CarRental } from '../components/car/CarRental';
import { FindFlight } from '../components/flight/FindFlight';
import { HomeScreen } from '../components/HomeScreen';
import { FindHotel } from '../components/hotels/FindHotel';
import { HotelDisponible } from '../components/hotels/HotelDisponible';
import { Navbar } from '../components/Navbar';
import { Tours } from '../components/tours/Tours';



export const AppRouter = () => {


    return (
        <>
           <Router>
               <Navbar />
                <Switch>
                    <Route exact path="/home" component={HomeScreen}/>
                    <Route exact path="/hotel" component={FindHotel}/>
                    <Route exact path="/flight" component={FindFlight}/>
                    <Route exact path="/car" component={CarRental}/>
                    <Route exact path="/tours" component={Tours}/>
                    <Route exact path="/find-hotel" component={HotelDisponible} />
                    <Redirect to="/home"/>
                </Switch>
            
            </Router> 
        </>
    )
}
