import React, { useState } from 'react'
import styled from 'styled-components'

import { faSun, faMoon, faClock } from '@fortawesome/free-solid-svg-icons'

import { getPassword } from '../../cipher'
import Dial from '../dial'
import GearBox from '../gearbox'
import PasswordWindow from '../password-window'


const CipherCylinder = styled.div`
    font-family: 'Inknut Antiqua', serif;
    width: 320px;
    height: 550px;
    background-image: linear-gradient(#b58463, #ffcb69, #ffcb69, #b58463);
    border-radius: 16%;
    border: 4px solid #997b66;
    display: grid;
    grid-template-columns: 10% auto 10%;
    grid-template-rows: 5% 40% 25% 20% 10%;
    place-items: center;

`

const DialsContainer = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
    display: flex;
    height: 100%;
`

const PasswordContainer = styled.div`
    grid-column-start: 2;
    grid-row-start: 3;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`

const GearBoxContainer = styled.div`
    grid-column-start: 2;
    grid-row-start: 4;
    width: 100%;
    height:100%;
`

const Cipher = () => {
    const [ input1, setInput1 ] = useState(1)
    const [ input2, setInput2 ] = useState(1)
    const [ input3, setInput3 ] = useState(0)
    const password = getPassword(input1, input2, input3)

    return (
        <CipherCylinder>
            <DialsContainer>
                <Dial hint={faMoon} value={input1} maxValue={12} onValueChange={ (value) => { setInput1(value) } }/>
                <Dial hint={faSun} value={input2} maxValue={28} onValueChange={ (value) => { setInput2(value) } }/>
                <Dial hint={faClock} value={input3} minValue={0} maxValue={23} onValueChange={ (value) => { setInput3(value) } }/>
            </DialsContainer>
            <PasswordContainer>
                <PasswordWindow password={password} />
            </PasswordContainer>
            <GearBoxContainer>
                <GearBox />
            </GearBoxContainer>
        </CipherCylinder>
    )
}

export default Cipher