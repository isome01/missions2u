import React, { Fragment, useCallback, useState } from 'react'
import CloseButton from 'missions2u/common/components/CloseButton'
import PropTypes from 'prop-types'
import css from './LandingInfo.css'
import { Redirect } from 'react-router'

const closeStyle = {
  margin: 10,
  color: '#fff',
  cursor: 'pointer',
  fontSize: 32,
  textDecoration: 'none'
}

const LandingInfo = ({unsetInitialVisit}) => {
  const [redirect, setRedirect] = useState('')
  const handleClose = useCallback(() => {
    console.log('clicked')
    unsetInitialVisit()
    return (
      <Redirect
        to='/'
      />
    )
  }, [unsetInitialVisit])

  return (
    <Fragment>
      <div className='landing col-sm-12'>
        <div className='float-right'>
          <span className='text-center' style={{display: 'flex', alignItems: 'center', color: '#fff'}}>
            <a href='/' onClick={handleClose}>
              Continue to website
              <span style={closeStyle}>&times;</span>
            </a>
          </span>
        </div>
        <div className='landing-info-text' style={{marginTop: 100}}>
          <section>
            <article>
              Missionaries from all around the globe come to unite on this very platform
            </article>
          </section>
        </div>
      </div>
    </Fragment>
  )
}

LandingInfo.propTypes = {
  unsetInitialVisit: PropTypes.func.isRequired
}

export default LandingInfo
