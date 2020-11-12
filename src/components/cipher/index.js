import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faSun, faMoon, faClock } from '@fortawesome/free-solid-svg-icons'

import { getPassword } from '../../cipher'


const CipherCylinder = styled.div`
    font-family: 'Inknut Antiqua', serif;
    width: 320px;
    height: 550px;
    background-image: linear-gradient(#b58463, #ffcb69, #ffcb69, #b58463);
    border-radius: 16%;
    border: 4px solid #997b66;
    display: grid;
    grid-template-columns: 32px auto 32px;
    grid-template-rows: 64px auto auto 64px;
    place-items: center;
`

const Dials = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
    display: flex;
    height: 100%;
`

const InputWrapper = styled.div`
    height: 100%;
    width: 64px;
    margin: 8px;
    display: flex;
    flex-direction: column;
`

const InputWheelWrapper = styled.div`
    flex: 5;
    border: 4px solid #997b66;
    display: flex;
    flex-direction: column;
`
const InputWheelDial = styled.div`
    flex: 4;
    background-image: linear-gradient(#acacac, #fefefe, #fefefe, #acacac);
    display: grid;
    place-items: center;
    font-size: 24px;
`

const InputHint = styled.div`
    flex: 1;
    font-size: 24px;
    color: #997b66;
    text-align: center;
`

const InputWheelButton = styled.button`
    flex: 1;
    margin: 0;
    padding: 8px 16px;
    width: 100%;
    height: 100%;
    background: #dc9c63;
    display: grid;
    place-items: center;
    border: 0;
    font-size: 24px;
    color: #997b66;
    text-align: center;
`

const InputWheel = ({ hint, value, maxValue, onValueChange }) => {
    const hintComponent = hint ? (
        <InputHint>
            <FontAwesomeIcon icon={hint} />
        </InputHint>
    ) : null
    return (
        <InputWrapper>
            { hintComponent }
            <InputWheelWrapper>
                <InputWheelButton onClick={ () => { onValueChange(value - 1 > 0 ? value - 1 : maxValue) } } >
                    <FontAwesomeIcon icon={faAngleUp} />
                </InputWheelButton>
                <InputWheelDial>
                    {value}
                </InputWheelDial>
                <InputWheelButton onClick={ () => { onValueChange((value + 1) <= maxValue ? value + 1 : 1 ) } }>
                    <FontAwesomeIcon icon={faAngleDown} />
                </InputWheelButton>
            </InputWheelWrapper>
        </InputWrapper>
    )
}

const PasswordContainer = styled.div`
    grid-column-start: 2;
    grid-row-start: 3;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
`

const PasswordView = styled.div`
    width: 100%;
    height: 100px;
    background-image: linear-gradient(#acacac, #fefefe, #fefefe, #acacac);
    border: 4px solid #997b66;
    display: flex;
    div {
        border-right: 1px solid #343434;
    }
    div:last-child {
        border: none;
    }
`

const cardRanks = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
]

const cardSuits = [
    '♠', '♥', '♣', '♦'
]

const CardContainer = styled.div`
    color: ${props => props.colour};
    display: grid;
    place-items: center;
    flex: 1;
    width: 32px;
    font-size: 18px;
`

const CardView = ({ rank, suit }) => {
    const colour = suit % 2 === 0 ? 'black' : 'red'
    return (
        <CardContainer colour={colour}>
            {cardRanks[rank]}{cardSuits[suit]}
        </CardContainer>
    )
}


const PasswordWindow = ({ password }) => {
    const cards = password.map((card, index) => {
        return <CardView key={index} rank={card.rank} suit={card.suit} />
    })
    return (
        <PasswordContainer>
            <PasswordView>
                {cards}
            </PasswordView>
        </PasswordContainer>
    )
}

const Cipher = () => {
    const [ input1, setInput1 ] = useState(1)
    const [ input2, setInput2 ] = useState(1)
    const [ input3, setInput3 ] = useState(1)
    const password = getPassword(input1, input2, input3)

    return (
        <CipherCylinder>
            <Dials>
                <InputWheel hint={faMoon} value={input1} maxValue={12} onValueChange={ (value) => { setInput1(value) } }/>
                <InputWheel hint={faSun} value={input2} maxValue={28} onValueChange={ (value) => { setInput2(value) } }/>
                <InputWheel hint={faClock} value={input3} maxValue={24} onValueChange={ (value) => { setInput3(value) } }/>
            </Dials>
            <PasswordWindow password={password} />
        </CipherCylinder>
    )
}

export default Cipher