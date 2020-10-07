import React from 'react';

const ImageExplanation = props => {
    const { imageExplanation } = props;
    console.log(imageExplanation)
    return (
        <div className = 'Nasa-Image-Explanation'>
           <p> {imageExplanation} </p>

        </div>
    )
}

export default ImageExplanation;