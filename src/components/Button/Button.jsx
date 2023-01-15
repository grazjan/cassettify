import React from 'react'
import { StyledButton, StyledButtonWrapper } from './styled'

const Button = ({ children, align }) => {
  return (
    <StyledButtonWrapper align={align}>
        <StyledButton>
            {children}
        </StyledButton>
    </StyledButtonWrapper>
  )
}

export default Button