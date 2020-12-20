import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { CarRental } from '../components/CarRental';
import { FindFlight } from '../components/FindFlight';
import { FindHotel } from '../components/FindHotel';
import { HomeScreen } from '../components/HomeScreen';
import { Navbar } from '../components/Navbar';
import { Tours } from '../components/Tours';


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
                    <Redirect to="/home"/>
                </Switch>
            
            </Router> 
        </>
    )
}
