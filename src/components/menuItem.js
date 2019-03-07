import React from 'react'
import styled from 'styled-components'

const LinkContainer = styled.li`
   margin: 0;
   padding: 5px 10px;
   flex: 1;
   font-size: .85rem;
`

const MenuItem = ({linktitle, url}) => {
  return (
    <LinkContainer>
      <a href={url} style={{ 
        margin: 0,
        color: `white`,
        textDecoration: `none`
         }}>{linktitle}</a>
    </LinkContainer>
  )
}

export default MenuItem
