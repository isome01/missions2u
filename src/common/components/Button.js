import React, {useCallback, Fragment} from 'react'
import PropTypes from 'prop-types'

const Button = ({onClick}) => {
  return (
    <Fragment>
      <div class='btn btn-sm'>
      </div>
    </Fragment>
  )
}

Button.propTypes = {
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button
