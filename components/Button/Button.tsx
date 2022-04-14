import React from 'react'
import PropTypes from 'prop-types'

import classes from './Button.module.css'

function Button ({ children, clickHandler, newclass }) {
  const addClass = [classes.btn, newclass].join(' ')
  return (
    <button className={addClass} onClick={() => { clickHandler('', true) }}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  clickHandler: PropTypes.func,
  newclass: PropTypes.string
}

export default Button
