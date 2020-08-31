import React from 'react'

function Button({ children, clickHandler }) {
    return (
        <button className="form__btn" id="btn_speak" onClick={() => { clickHandler(true) }}>{children}</button>
    )
}

export default Button
