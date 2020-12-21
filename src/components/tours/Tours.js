import React from 'react'
import { Menu } from '../Menu'


export const Tours = () => {
    return (
        <>
           <div className="container">
                <div className="center-page">
                    <Menu  />
                    <div className="center">
                        <div className="find-tours">
                            <h1>Find your tours</h1>
                            <input 
                                type="search"
                                placeholder="Search tour"
                            />
                        </div>
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
