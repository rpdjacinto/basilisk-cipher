import React from 'react'
import styled, { keyframes } from 'styled-components'

const GearBoxWrapper = styled.div`
    border: 4px solid #b58463;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: grid;
    place-items: center;
    position: relative;
    background-color: #997b66;
`

const Overlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    box-shadow: inset 0px 0px 20px black;
`

const clockwise = keyframes`
    0%   { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
`;

const counterClockwise = keyframes`
    0%   { transform: rotate(360deg) }
    100% { transform: rotate(0deg) }
`;

const GearOuter = styled.div`
    background-color: #d08c60;
    border-radius: 50%;
    width: ${props => props.pixelSize}px;
    height: ${props => props.pixelSize}px;
    display: grid;
    place-items: center;
    position: absolute;
    top: ${props => props.x}px;
    left: ${props => props.y}px;
    box-shadow: 0px -1px 0px 0px #e8ac65;
    animation: ${props => props.animation} ${props => props.speed}s linear infinite;
    & > div:nth-child(2) {
        transform: rotate(60deg);
    }
    & > div:nth-child(3) {
        transform: rotate(120deg);
    }
    & > div:nth-child(4) {
        transform: rotate(90deg);
    }
    & > div:nth-child(5) {
        transform: rotate(30deg);
    }
    & > div:nth-child(6) {
        transform: rotate(150deg);
    }
`

const GearInner = styled.div`
    background-color: #997b66;
    border-radius: 50%;
    width: 60%;
    height: 60%;
    position: absolute;
`

const Bar = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background-color: #d08c60;
    border-radius: 3px;
    position: absolute;
`

const SmallGear = ({ x, y, isClockwise }) => {
    const pixelSize = 60
    const barHeight = 10
    const barWidth = 16
    return (
        <GearOuter x={x} y={y} pixelSize={pixelSize} animation={isClockwise ? clockwise : counterClockwise} speed={4}>
            <Bar height={pixelSize + 2 * barHeight} width={barWidth}/>
            <Bar height={pixelSize + 2 * barHeight} width={barWidth}/>
            <Bar height={pixelSize + 2 * barHeight} width={barWidth}/>
            <GearInner>
            </GearInner>
        </GearOuter>
    )
}

const LargeGear = ({ x, y, isClockwise }) => {
const pixelSize = 120
    const barHeight = 10
    const barWidth = 16
    return (
        <GearOuter x={x} y={y} pixelSize={pixelSize} animation={isClockwise ? clockwise : counterClockwise} speed={8}>
            <Bar height={pixelSize + 2 * barHeight} width={barWidth}/>
            <Bar height={pixelSize + 2 * barHeight} width={barWidth}/>
            <Bar height={pixelSize + 2 * barHeight} width={barWidth}/>
            <Bar height={pixelSize + 2 * barHeight} width={barWidth}/>
            <Bar height={pixelSize + 2 * barHeight} width={barWidth}/>
            <Bar height={pixelSize + 2 * barHeight} width={barWidth}/>
            <GearInner>
            </GearInner>
        </GearOuter>
    )
}

const GearBox = () => {
    return (
        <GearBoxWrapper>
            <SmallGear x={-4} y={-4} size={'small'} isClockwise={false}/>
            <SmallGear x={48} y={48} size={'small'} isClockwise={true} />
            <LargeGear x={54} y={116} size={'large'} isClockwise={false} />
            <LargeGear x={-72} y={159} size={'large'} isClockwise={true} />
            <Overlay />
        </GearBoxWrapper>
    )
}

export default GearBox