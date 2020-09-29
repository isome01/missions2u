import React from 'react'
import PropTypes from 'prop-types'

const defaultStyle = {
  margin: 10,
  color: '#fff',
  cursor: 'pointer',
  fontSize: 32
}

const CloseButton = ({style, handleClose}) => {
  return (
    <span
      style={{...defaultStyle, ...style}}
      onClick={handleClose}
    >&times;</span>
  )
}

CloseButton.propTypes = {
  style: PropTypes.object,
  handleClose: PropTypes.func.isRequired
}

CloseButton.defaultProps = {
  style: {}
}

export default CloseButton
