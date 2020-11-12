import React from 'react';
import styled from 'styled-components';


const Header = styled.div`

    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 12vh;
    
    
    h1{
        font-size: 4rem;
        padding: 0;
        margin: 0;
    }
`
const NavBar = styled.div`
    background-color: mistyrose;
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
        padding-left: 2%;
        font-size: 1.5rem;
    }
`
const PageHeader = props => {
    return (
            <Header>
                <NavBar>
                    <a href={'https://www.nasa.gov/'}>About</a>
                </NavBar>
                   
                <div>
                    <h1> Nasa Photo Of The Day</h1>
                </div>
            </Header>
    )
}

export default PageHeader;


// could add also in the div a navigation bar at the top of the screen 