import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
    border-radius: 8px;
    overflow: hidden;
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
    font-size: 18px;
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

export default InputWheel