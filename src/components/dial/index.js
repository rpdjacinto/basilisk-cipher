import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const DialWrapper = styled.div`
    height: 100%;
    width: 64px;
    margin: 8px;
    display: flex;
    flex-direction: column;
`

const DialWheelWrapper = styled.div`
    flex: 5;
    border: 4px solid #997b66;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`
const DialWheel = styled.div`
    flex: 4;
    background-image: linear-gradient(#acacac, #fefefe, #fefefe, #acacac);
    display: grid;
    place-items: center;
    font-size: 24px;
`

const DialHint = styled.div`
    flex: 1;
    font-size: 18px;
    color: #997b66;
    text-align: center;
`

const DialButton = styled.button`
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

const Dial = ({ hint, value, minValue = 1, maxValue, onValueChange }) => {
    const hintComponent = hint ? (
        <DialHint>
            <FontAwesomeIcon icon={hint} />
        </DialHint>
    ) : null
    return (
        <DialWrapper>
            { hintComponent }
            <DialWheelWrapper>
                <DialButton onClick={ () => { onValueChange(value - 1 >= minValue ? value - 1 : maxValue) } } >
                    <FontAwesomeIcon icon={faAngleUp} />
                </DialButton>
                <DialWheel>
                    {value}
                </DialWheel>
                <DialButton onClick={ () => { onValueChange((value + 1) <= maxValue ? value + 1 : minValue ) } }>
                    <FontAwesomeIcon icon={faAngleDown} />
                </DialButton>
            </DialWheelWrapper>
        </DialWrapper>
    )
}

export default Dial