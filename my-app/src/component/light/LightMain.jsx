import React from 'react';
import styled from 'styled-components';

const Scontainer = styled.div`
    display:flex;
    width: 60vw;
    height: 60vh;
    background-color: rgb(24, 79, 94);
`

const Sleft = styled.div`
    display:flex;
    flex-direction:column;
    width: 30%;
    height: 45%;
`

const Sright = styled.div`
    display:flex;
    flex-direction:column;
    width: 30%;
    height: 45%;
`

const Slight = styled.div`
    background-color: rgb(91, 124, 133);
`



function LightMain() {
    return (
        <Scontainer>
            <Sleft>
                <Slight>

                </Slight>

            </Sleft>
            <div>

            </div>
            <Sright>
                
            </Sright>
            
        </Scontainer>
    );
}

export default LightMain;