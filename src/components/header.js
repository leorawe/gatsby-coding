import PropTypes from "prop-types"
import React from "react"

import MenuItem from './menuItem'

const Header = () => (
  <header
    style={{
      background: `gray`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.5rem .5rem`,
      }}
    >
      <div style={{ 
            margin: 0,
             }}>
        <ul style={{ 
            margin: 0,
            listStyleType: `none`,
            display: `flex`
             }}>
             <MenuItem />
             <MenuItem />
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
