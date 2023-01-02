import React from 'react';
import styled from 'styled-components';

const Scontainer = styled.div`
    display:flex;
    width: 60vw;
    height: 60vh;
    background-color: rgb(24, 79, 94);
    justify-content:space-between;
    border-radius: 10px;
`

const SBox = styled.div`
    display:flex;
    flex-direction:column;
    width: 33%;
    height: 100%;
    justify-content:center;
`


const Slight = styled.div`
    background-color: rgb(91, 124, 133);
    margin: 10px;
    border-radius: 10px;
    height: 50%;
`



function LightMain() {
    return (
        <Scontainer>
            <SBox>
                <Slight>
                    d
                </Slight>
                <Slight>
                    d
                </Slight>
            </SBox>
            <div>
d
            </div>
            <SBox>
                <Slight>
                    d
                </Slight>
                <Slight>
                    d
                </Slight>
            </SBox>
            
        </Scontainer>
    );
}

export default LightMain;