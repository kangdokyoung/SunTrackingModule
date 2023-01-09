import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { pictureList } from '../../atom/atom';
import { light_1, light_2,light_3,light_4 } from '../../atom/atom';
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

const SmainContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:80%;
    color:white;
    font-size:80px;
`


function LightMain() {
    const [picture,] = useRecoilState(pictureList);
    const [light1, ] = useRecoilState(light_1);
    const [light2, ] = useRecoilState(light_2);
    const [light3, ] = useRecoilState(light_3);
    const [light4, ] = useRecoilState(light_4);

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
                    <SmainContent>{light1}</SmainContent>
                </Slight>
                <Slight>
                    <StitleBox>
                        <Simg alt='sun' src={picture[2]} />
                        <SsubTitle>
                            4광도
                        </SsubTitle>
                    </StitleBox>
                    <SmainContent> {light4}</SmainContent>
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
                    <SmainContent>{light2}</SmainContent>
                </Slight>
                <Slight>
                <StitleBox>
                        <Simg alt='sun' src={picture[2]} />
                        <SsubTitle>
                            3광도
                        </SsubTitle>
                    </StitleBox>
                    <SmainContent>{light3}</SmainContent>
                </Slight>
            </SBox>
            
        </Scontainer>
    );
}

export default LightMain;