import React from 'react';
import styled from 'styled-components';

const PictureTitle = styled.div`

    h2 {
        font-size: 3rem;
    }

`


const ImageTitle = props => {

    const { imageTitle } = props;
    
    return (
        <PictureTitle>
            <h2> {imageTitle} </h2>
        </PictureTitle>
    )
}
 
export default ImageTitle;