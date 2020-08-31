import React from 'react'

function TextArea({ keyupHandler }) {
    return (
        <textarea onKeyUp={() => { keyupHandler() }} className="form__input" name="txt_field" id="txt_field"></textarea>
    )
}

export default TextArea
