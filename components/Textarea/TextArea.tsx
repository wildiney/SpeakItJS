import React from 'react'

function TextArea({ keyupHandler, textHandler }) {
    return (
        <textarea onKeyUp={(e) => { keyupHandler((e.target as HTMLTextAreaElement).value) }} value={textHandler} className="form__input" name="txt_field" id="txt_field"></textarea>
    )
}

export default TextArea
