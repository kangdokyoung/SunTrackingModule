import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { pictureList } from '../../atom/atom';

const Scontainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:  rgb(24, 79, 94);
    border-radius: 10px;
    width: 17vw;
    margin-bottom: 20px;
`

const Simg = styled.img`
    margin: 10px;
`

const Stext = styled.div`
    color:white;
    font-size: 50px;
    margin: 5px;
    font-weight: medium;
`

function Info() {
    const [picture] = useRecoilState(pictureList);

    return (
        <Scontainer>
            <Simg alt='compass' src={picture[0]} />
            <Stext>동남쪽</Stext>
        </Scontainer>
    );
}

export default Info;