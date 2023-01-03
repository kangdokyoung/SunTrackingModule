import React from 'react';
import LightMain from '../light/LightMain';
import styled from 'styled-components';
import TempHum from '../temp/TempHum';
import Info from '../info/Info';
import LatLng from '../latlng/LatLng';

const Scontainer = styled.div`
    display:flex;
    background-color: rgb(7, 34, 63);
    height: 100vh;
    padding: 15px;
`

const SleftSide = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`

const SrightSide = styled.div`
    display:flex;
    flex-direction:column;
    padding-left: 20px;
`

const Main = ()=> {

    return (
        <Scontainer>
            <SleftSide>
                <TempHum />
                <LightMain />
            </SleftSide>
            <SrightSide>
                <LatLng />
                <Info />
            </SrightSide>
        </Scontainer>
    );
}

export default Main;