import React from 'react'

function TextArea({ keyupHandler, textHandler, changeHandler }) {
    return (
        <textarea
            onKeyUp={(e) => { keyupHandler(e) }}
            onChange={(e) => { changeHandler(e) }}
            value={textHandler}
            className="form__input"
            name="txt_field"
            id="txt_field"></textarea>
    )
}

export default TextArea
