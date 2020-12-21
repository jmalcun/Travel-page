import React from 'react'


export const WelcomePage = () => {

    

    return (
        <>
            
            <div className="welcome">
                <h1>Welcome to <span>JM-Travel</span></h1>
                <div className="choices">
                    <div className="choice hotel">
                        <p>choose the hotel of your dreams</p>
                    </div>
                    <div className="choice avion">
                        <p>choose your flight</p>
                    </div>
                    <div className="choice auto">
                        <p>choose your car</p>
                    </div>  
                    <div className="choice tours">
                        <p>choose your tours</p>
                    </div>     
                </div>
            </div>  
        </>
    )
}
