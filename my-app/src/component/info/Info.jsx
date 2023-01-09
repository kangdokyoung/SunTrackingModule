import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { pictureList } from '../../atom/atom';
import { angle,humidity,magnitude,temperature } from '../../atom/atom';
const Scontainer = styled.div`
    display:flex;
    align-items:center;
    width: 17vw;
    background-color:  rgb(24, 79, 94);
    border-radius: 10px;
    height: 100%;
`

const Simg = styled.img`
    width: 70%;
    height: 80%;
`

const Sinfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height: 70%;
`

const Stitle = styled.div`
    color: white;
    font-size: 30px;
    font-weight:medium;
`

const Sdata = styled.div`
    color: white;
    font-size: 20px;
    margin-left: 15px;
`

function LatLng() {
    const [picture] = useRecoilState(pictureList);
    const [ang, ] = useRecoilState(angle);
    const [temp, ] = useRecoilState(temperature);
    const [hum, ] = useRecoilState(humidity);
    const [mag, ] = useRecoilState(magnitude);

    return (
        <Scontainer>
            <Simg alt='SunTrackModule' src={picture[4]} />
            <Sinfo>
                <Stitle>ㅇ광도</Stitle>
                <Sdata>ㅇ {mag}</Sdata>
                <Stitle>ㅇ온도</Stitle>
                <Sdata>ㅇ {temp}</Sdata>
                <Stitle>ㅇ습도</Stitle>
                <Sdata>ㅇ {hum}</Sdata>
                <Stitle>ㅇ각도</Stitle>
                <Sdata>ㅇ {ang}</Sdata>
            </Sinfo>
        </Scontainer>
    );
}

export default LatLng;