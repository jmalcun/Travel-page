import React, { useState } from 'react'
import { Menu } from './Menu'
import { WelcomePage } from './WelcomePage'

export const HomeScreen = () => {

    return (
        <>
            <div className="container">
                <div className="center-page">
                    <Menu  />
                    <div className="center">
                         <WelcomePage />
                        <footer class="footer">
                            <div class="footer-description">
                                <p>GOOD NEWS! WE HAVE 4 FREE ROOMS FOR YOUR SELECTED DATES!</p>
                            </div>
                            <button class="btn">BOOK NOW</button>
                        </footer>  
                    </div>     
                </div>  
            </div>
        </>
    )
}
