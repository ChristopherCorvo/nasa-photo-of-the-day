import React from 'react';

const ImageTitle = props => {

    const { imageTitle } = props;
    console.log(imageTitle)
    return (
        <div className = 'title-of-image'>
            <h2> {imageTitle} </h2>

        </div>


    )
}
 
export default ImageTitle;