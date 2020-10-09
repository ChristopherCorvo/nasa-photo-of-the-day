import React from 'react';
import styled from 'styled-components';

const Explanation = styled.div`   
    
    p{
        font-size: 3rem;
        text-align: center;
        padding-left: 4%;
        padding-right: 4%;
    }
`

const ImageExplanation = props => {
    const { imageExplanation } = props;

    return (
        <Explanation>
           <p> {imageExplanation} </p>
        </Explanation>
    )
}

export default ImageExplanation;