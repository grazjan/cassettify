import styled, { keyframes } from "styled-components";

const wheelAnimation = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
`

export const StyledCassetteWrapper = styled.div`
    border-radius: 8px;
    background-color: ${props => props.theme.colors.secondary};
    width: ${props => props.theme.cassette.cassette_width};
    padding: 2rem 1rem 0rem 1rem;
    position: relative;
    margin: 0 auto;
`

export const CassetteScrewsWrapper = styled.div`
    position: absolute;
    top: ${props => props.position == 'top' ? '0' : 'auto'};
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
`

export const CassetteScrew = styled.div`
    background-color: ${props => props.theme.cassette.screw_background_color};
    width: 12px;
    height: 12px;
    border-radius: 100%;
    padding: 2px;
    position: relative;
    &:after {
        content: '';
        width: 2px;
        height: 100%;
        background-color: ${props => props.theme.cassette.screw_color};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        transform: ${props => props.deg ? `rotate(${props.deg})`: 'rotate(45deg)'}
    }
`

export const CassetteInner = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
`

export const CassetteInnerTop = styled.div`
    padding: 1rem;
    background-color: #fff;
    display: flex;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
`

export const CassetteSide = styled.div`
    font-size: ${props => props.theme.cassette.side_font_size};
    font-weight: bold;
    background-color: ${props => props.theme.cassette.cassette_inner_color};
    padding: 0.25rem 0.5rem;
    color: #fff;
    border-radius: 0.5rem;
    margin-right: 1rem;
`

export const CassetteWhitespace = styled.div`
  
`

export const SongArtist = styled.div`

`

export const SongTitel = styled.div`

`

export const CassetteInnerBottom = styled.div`
    background-color: ${props => props.theme.cassette.cassette_inner_color};
    padding: 2rem;
`

export const CassetteWheelsWrapper = styled.div`
    background-color: #000;
    padding: 1rem;
    width: 75%;
    margin-right: auto;
    margin-left: auto;
    border-radius: 6px;
    display: flex;
    justify-content: space-evenly;
`

export const CassetteWheel = styled.div`
    width: 56px;
    height: 56px;
    background-color: #fff;
    border-radius: 100%;
    border: 5px dashed #000;
    animation-name: ${wheelAnimation};
    animation-iteration-count: infinite;
    animation-duration: 8s;
    animation-timing-function: linear;
    animation-play-state: ${props => props.isPlaying ? 'running' : 'paused'}
`   

export const CassetteTape = styled.div`
    width: 100px;
    height: 56px;
    background-color: #fff;
    border-radius: 6px;
` 

export const CassetteBottom = styled.div`
    padding-top: 1rem;
    & .inner {
        width: 60%;
        height: 34px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.5rem;
        & .first-side:before,
        & .second-side:before {
            content: "";
            width: 16px;
            height: 16px;
            background: #fff;
            border-radius: 100%;
            position: absolute;
            bottom: 0.5rem;
        }
        & .first-side:before {
            left: 3rem;
        }
        & .second-side:before {
            right: 3rem;
        }
    }
`
