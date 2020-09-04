import React from 'react'

import classes from './Button.module.css'

function Button({ children, clickHandler, newclass }) {
    const addClass = [classes.btn, newclass].join(' ')
    return (
        <button className={addClass} onClick={() => { clickHandler(true) }}>{children}</button>
    )
}

export default Button
