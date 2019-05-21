import React from 'react'
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components'

const Social = styled.div`
        padding: 0 5px;
  `
const Footer = () => {
  return (
    <div>
      <div style={{ 
        display: `flex`,
        justifyContent: 'center',
        paddingBottom: 10
       }}>
      <Social><SocialIcon url="https://github.com/leorawe" /></Social>
      <Social><SocialIcon url="https://twitter.com/leoraw" /></Social>
      <Social><SocialIcon url="https://codepen.com/leoraw" /></Social>
      {/* <p><a href="https://codepen.io/leoraw/"><img src="../images/social/codepen-50px.jpg" alt="CodePen"></a> &nbsp; <a href="https://twitter.com/leoraw"><img src="../images/social/twitter-icon.png" alt="Leora Wenger on Twitter"></a> &nbsp; <a href="http://www.pinterest.com/leorawenger/"><img src="../images/social/pinterest.png" alt="Pinterest" /></a> &nbsp; <a href="http://www.linkedin.com/in/leoraw/"><img src="../images/social/linkedin.png" alt="Leora Wenger on LinkedIn" /></a> &nbsp; <a href="https://github.com/leorawe"><img src="../images/social/github-mark-50px.png" alt="GitHub" /></a></p></div>
        */} 
        </div>
        <div style={{ 
        display: `block`,
        paddingTop: 20,
        textAlign: `center`
       }}> © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
  )
}

export default Footer
