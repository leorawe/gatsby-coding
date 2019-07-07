import React from 'react'
import styled from 'styled-components'

const LinkContainer = styled.li`
   margin: 0;
   padding: 5px 10px;
   &:nth-child(4) {
      flex: 1;
    }
`
const StyledLink = styled.a`
   margin: 0;
   color: #333;
   text-decoration: none;
   font-size: .85rem;
    &:hover {
    color: #000000;
    border-bottom: 1px solid #cccccc;
   
  }
`

const MenuItem = ({linktitle, url}) => {
  return (
    <LinkContainer>
      <StyledLink href={url}>{linktitle}</StyledLink>
    </LinkContainer>
  )
}

export default MenuItem
