import React from 'react';
import ReactPlayer from 'react-player'
import styled from 'styled-components'


const ImageWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    
    img {
        border: 20px solid black;
        margin-top: 2%;
        margin-bottom: 1%;
    }
`


const NasaImage = props => {

    const { nasaImage } = props

    if (!nasaImage) return <h3>Loading...</h3>;
    
    function checkURL(url) {
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    if(checkURL(nasaImage) === true) {
        return (
            <div className = 'main-nasa-image-container'>
                <ImageWrapper>
                    <img
                        alt = "space"
                        className = "nasa-image"
                        src={nasaImage}
                    />
                </ImageWrapper>
            </div>
        )
    } else {
        return (
            <div className = 'main-nasa-image-container'>
                <ImageWrapper>
                    <ReactPlayer
                        url={nasaImage}
                    />
                </ImageWrapper>    
            </div>
        )
    }    
}

export default NasaImage;