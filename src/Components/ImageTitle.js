import React from 'react';



const ImageTitle = props => {

    const { imageTitle } = props;
    console.log(imageTitle)
    if (!imageTitle) return <h3>Loading...</h3>;
    return (
        <div className = 'title-of-image'>
            <h2> {imageTitle} </h2>
        </div>
    )
}
 
export default ImageTitle;