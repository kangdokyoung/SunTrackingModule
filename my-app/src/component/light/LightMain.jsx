import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { pictureList } from '../../atom/atom';

const Scontainer = styled.div`
    display:flex;
    width: 80vw;
    height: 65vh;
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
    border-radius: 20px;
    height: 50%;
`

const Simg = styled.img`
    width: 50px;
    height: 50px;
    padding: 5px;
`

const SsubTitle = styled.div`
    color: white;
    heith: 50px;
    font-size: 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const StitleBox = styled.div`
    display:flex;
`

const SmiddleImg = styled.img`
    width: 100%;
    height: 60%;
`

const Simgcontainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`


function LightMain() {
    const [picture,] = useRecoilState(pictureList);

    return (
        <Scontainer>
            <SBox>
                <Slight>
                    <StitleBox>
                        <Simg alt='sun' src={picture[2]} />
                        <SsubTitle>
                            1광도
                        </SsubTitle>
                    </StitleBox>
                </Slight>
                <Slight>
                <StitleBox>
                        <Simg alt='sun' src={picture[2]} />
                        <SsubTitle>
                            4광도
                        </SsubTitle>
                    </StitleBox>
                </Slight>
            </SBox>
            <Simgcontainer>
                <SmiddleImg alt='middleimg' src={picture[3]} />
            </Simgcontainer>
            <SBox>
                <Slight>
                <StitleBox>
                        <Simg alt='sun' src={picture[2]} />
                        <SsubTitle>
                            2광도
                        </SsubTitle>
                    </StitleBox>
                </Slight>
                <Slight>
                <StitleBox>
                        <Simg alt='sun' src={picture[2]} />
                        <SsubTitle>
                            3광도
                        </SsubTitle>
                    </StitleBox>
                </Slight>
            </SBox>
            
        </Scontainer>
    );
}

export default LightMain;