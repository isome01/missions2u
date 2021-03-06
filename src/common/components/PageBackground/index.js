import React from 'react'
import PropTypes from 'prop-types'

const PageBackground = ({url, style}) => {
  
  const defaultStyle = {
    position: 'absolute',
    zIndex: 'default',
    justifyContent: 'center',
    background: `#fff url("${url}") no-repeat fixed center`,
    top: 0,
    left: 0,
    minHeight: 1000,
    width: '100%'
  }

  return(
    <div style={{...defaultStyle, ...style}} />
  )
}

PageBackground.propTypes = {
  style: PropTypes.object,
  url: PropTypes.string.isRequired
}

PageBackground.defaultProps = {
  style: {}
}

export default PageBackground
