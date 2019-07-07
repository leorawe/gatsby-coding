import PropTypes from "prop-types"
import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

import MenuItem from './menuItem'
import logo from '../images/leoraw-logo-80px.png'

const HeadWrap = styled.div`
    background: #e9e9e9;
    padding: 0 calc((100vw - 750px)/2);
    margin: 0 auto;
    margin-bottom: 20px;
    height: 40px;
    @media (max-width: 550px) {
    height: auto;
  }
`
const MenuContainer = styled.ul`
    list-style-type: none;
    margin: 0 auto;
    display: flex;
    justify-content: stretch;
    flex-wrap: wrap;
    @media (max-width: 550px) {
    flex-direction: column;
    padding-left: 10%;
  }
` 

const LogoWrap = styled.div`
    width: 70px;
    height: 70px;
    padding: 0 5px;
   
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
    <LogoWrap><img src={logo} alt="leoraW dot com logo" /></LogoWrap>
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
