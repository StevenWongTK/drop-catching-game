import { SlideOne } from './SlideOne'
import { SlideTwo } from './SlideTwo'
import { SlideThree } from './SlideThree'
import { SlideFour } from './SlideFour'
import styled from 'styled-components'

export const STutorialBackground = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #fff;
    background-color: #556e84;
    position: relative;
    color: #1c242f;
    padding: 48px;
    box-sizing: border-box;
    text-align: center;
`

export const slides = [SlideOne, SlideTwo, SlideThree, SlideFour]
