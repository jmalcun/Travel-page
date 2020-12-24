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
                       
                    </div>     
                </div>
                <footer class="footer">
                            
                    <p>© 2019— JM travel </p>
                            
                </footer>    
            </div>
        </>
    )
}
