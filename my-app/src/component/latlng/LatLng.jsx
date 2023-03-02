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

function Info() {
    const [picture] = useRecoilState(pictureList);

    return (
        <Scontainer>
            <Simg alt='compass' src={picture[0]} />
        </Scontainer>
    );
}

export default Info;