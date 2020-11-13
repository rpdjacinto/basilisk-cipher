import React from 'react'
import styled from 'styled-components'

const PasswordView = styled.div`
    width: 100%;
    height: 64px;
    background-image: linear-gradient(#acacac, #fefefe, #fefefe, #acacac);
    border-radius: 8px;
    overflow: hidden;
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
        <PasswordView>
            {cards}
        </PasswordView>
    )
}

export default PasswordWindow