import React from 'react';

const ImageExplanation = props => {
    const { imageExplanation } = props;
    console.log(imageExplanation)

    if (!imageExplanation) return <h3>Loading...</h3>;
    return (
        <div className = 'Nasa-Image-Explanation'>
           <p> {imageExplanation} </p>

        </div>
    )
}

export default ImageExplanation;