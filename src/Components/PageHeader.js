import React from 'react';

const PageHeader = props => {
    return (
            
            <div className = 'Page_Header'>
                <div className = 'Page_Header_Image'>
                    <img   src ='src/Assets/SpaceShip.png'
                            alt ='cartoon spaceship'
                    />
                </div>

                <div>
                    <h1> Nasa Photo Of The Day!!</h1>
                </div>
            </div>
        
    )
}

export default PageHeader;


// could add also in the div a navigation bar at the top of the screen 