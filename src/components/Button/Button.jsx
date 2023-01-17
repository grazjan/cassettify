import React from 'react'
import { StyledButton, StyledButtonWrapper } from './styled'

const Button = ({ children, align, as, className }) => {
  return (
    <StyledButtonWrapper className={className} align={align}>
        <StyledButton as={as}>
            {children}
        </StyledButton>
    </StyledButtonWrapper>
  )
}

export default Button