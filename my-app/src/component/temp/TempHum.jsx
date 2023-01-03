import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { pictureList } from '../../atom/atom';

const Scontainer = styled.div`
    display:flex;
    justify-content:space-between;
    width: 80vw;
    height: 31vh;
`

const Sbox = styled.div`
    background-color: rgb(24, 79, 94);
    border-radius: 20px;
    width: 49%;
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

const Simg = styled.img`
    width: 50px;
    height: 50px;
    padding: 5px;
`


function TempHum() {
    const [picture] = useRecoilState(pictureList);
    return (
        <Scontainer>
            <Sbox>
                <StitleBox>
                    <Simg alt='humidity' src={picture[1]} />
                    <SsubTitle>
                        습도
                    </SsubTitle>
                </StitleBox>
                그래프
            </Sbox>
            <Sbox>
            <StitleBox>
                    <Simg alt='humidity' src={picture[5]} />
                    <SsubTitle>
                        온도
                    </SsubTitle>
                </StitleBox>
                그래프
            </Sbox>
        </Scontainer>
    );
}

export default TempHum;