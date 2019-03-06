import React from 'react'
import styled from 'styled-components'

const LinkContainer = styled.li`
   margin: 0;
   padding: 5px 30px;
   flex: 1;
`

const MenuItem = () => {
  return (
    <LinkContainer>
      <a href="/" style={{ 
        margin: 0,
        color: `white`,
        textDecoration: `none`
         }}>link</a>
    </LinkContainer>
  )
}

export default MenuItem
