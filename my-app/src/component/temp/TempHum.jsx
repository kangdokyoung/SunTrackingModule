import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { angle, humidity, light_1, light_2, light_3, light_4, magnitude, pictureList, temperature } from '../../atom/atom';
import Chart from 'react-google-charts';
import io from 'socket.io-client';

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
const socket = io("ws://localhost:2006", { transports: ['websocket'] });

function TempHum() {
    const [picture] = useRecoilState(pictureList);
    const [humChart, setHumChart] = useState([]);
    const [temChart, setTemChart] = useState([]);

    const [, setAng] = useRecoilState(angle);
    const [, setTemp] = useRecoilState(temperature);
    const [, sethum] = useRecoilState(humidity);
    const [, setMag] = useRecoilState(magnitude);

    const [, setLight1] = useRecoilState(light_1);
    const [, setLight2] = useRecoilState(light_2);
    const [, setLight3] = useRecoilState(light_3);
    const [, setLight4] = useRecoilState(light_4);

    // 2023/01/09, 03:02:24, 5,9, 20, 13, 18, 85, 85, 23, 20
    // 년/월/일 , 시분초, 광도1, 2, 3, 4, 서보x, 서보y, 온도, 습도


    useEffect(()=>{
        socket.on('message', (arg)=>{
            let getData = (arg.split(','));
            console.log(getData);
            let newDate = new Date(getData[0] + getData[1])
            setHumChart(prev => [...prev, [newDate, Number(getData[10])]]);
            setTemChart(prev => [...prev, [newDate, Number(getData[9])]]);
            setAng((Number(getData[6]) + Number(getData[7]))/2);
            setTemp(Number(getData[9]));
            sethum(Number(getData[10]));
            setMag((Number(getData[2]) + Number(getData[3]) + Number(getData[4]) + Number(getData[5])) / 4);
            setLight1(Number(getData[2]));
            setLight2(Number(getData[3]));
            setLight3(Number(getData[4]));
            setLight4(Number(getData[5]));
        })

    },[])

    return (
        <Scontainer>
            <Sbox>
                <StitleBox>
                    <Simg alt='humidity' src={picture[1]} />
                    <SsubTitle>
                        습도
                    </SsubTitle>
                </StitleBox>
                <Chart
                    chartType="LineChart"
                    data={[['date', 'humidity'], ...humChart]}
                    height='90%'
                    width='100%'
                />
            </Sbox>
            <Sbox>
            <StitleBox>
                    <Simg alt='humidity' src={picture[5]} />
                    <SsubTitle>
                        온도
                    </SsubTitle>
                </StitleBox>
                <Chart
                    chartType="LineChart"
                    data={[['date', 'temperature'], ...temChart]}
                    height='90%'
                    width='100%'
                />
            </Sbox>
        </Scontainer>
    );
}

export default TempHum;