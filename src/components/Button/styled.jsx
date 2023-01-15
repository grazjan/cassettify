import styled from "styled-components";


export const StyledButtonWrapper = styled.div`
    text-align: ${props => props.align ? props.align : 'left'}
`

export const StyledButton = styled.div`
    border-radius: 8px;
    background-color: ${props => props.theme.colors.primary};
    display: inline-block;
    padding: 0.85rem 2rem;
    transition: all .3s;
    color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #000
    }
`
