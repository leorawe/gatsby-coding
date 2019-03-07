import PropTypes from "prop-types"
import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

import MenuItem from './menuItem'

const HeadWrap = styled.div`
    background: #e9e9e9;
    padding: 0 calc((100vw - 800px)/2);
    margin: 0 auto;
`
const MenuContainer = styled.ul`
    background: pink;
    list-style-type: none;
    margin: 0 auto;
    display: flex;
    justify-content: stretch;
    flex-wrap: wrap;
`
const Header = () => {
  const data = useStaticQuery(graphql`
  {
    allMenuJson{
      edges{
        node{
          linktitle
          url
        }
      }
    }
  }
  `);
  const menulinks = data.allMenuJson.edges;
  return(
  <HeadWrap>
    <MenuContainer>
    <div>img</div>
    {menulinks.map(({node: menulink})=>{
        const linktitle = menulink.linktitle;
        const url = menulink.url;
        return (
             <MenuItem 
             linktitle={linktitle}
             url={url}
             />
             );
        })}
        </MenuContainer>
    </HeadWrap>
    )
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
