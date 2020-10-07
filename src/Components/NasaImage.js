import React from 'react';

const NasaImage = props => {

    const { nasaImage } = props
    console.log(nasaImage)
    return (
        <div className = 'main-nasa-image-container'>
            <div className = 'nasa-image-wrapper'>
                <img
                    alt = "space"
                    className = "nasa-image"
                    src={nasaImage}
                />
            </div>

        </div>
    )
}

export default NasaImage;