import React from 'react';
import ReactPlayer from 'react-player'


const NasaImage = props => {

    const { nasaImage } = props
    console.log(nasaImage)

    if (!nasaImage) return <h3>Loading...</h3>;
    
    return (
        <div className = 'main-nasa-image-container'>
            <div className = 'nasa-image-wrapper'>
                <img
                    alt = "space"
                    className = "nasa-image"
                    src={nasaImage}
                />
                
                {/* <ReactPlayer
                    url = {nasaImage}
                /> */}
            
            </div>

        </div>
    )
}

export default NasaImage;