import React from 'react';
import LightMain from '../light/LightMain';
import styled from 'styled-components';

const Scontainer = styled.div`
    background-color: rgb(7, 34, 63);
    height: 100vh;
    padding: 15px;
`
const Main = ()=> {

    return (
        <Scontainer>
            <LightMain />
        </Scontainer>
    );
}

export default Main;