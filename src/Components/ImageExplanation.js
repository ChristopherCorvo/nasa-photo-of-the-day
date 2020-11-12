import React from 'react';
import styled from 'styled-components';

const Explanation = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: center;
    ;
   
    p{
        font-size: 1rem;
        text-align: justify;
        padding: 4%;
        align-items: center;
        border: 2px solid black;
        width: 45%;
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