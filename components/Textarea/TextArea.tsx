import React from 'react'
import classes from './TextArea.module.css'

function TextArea ({
  keyupHandler,
  textHandler, changeHandler }) {
  return (
    <div className={classes.textArea}>
      <textarea
        className={classes.txt_field}
        onKeyUp={(e) => {
          keyupHandler(e)
        }}
        onChange={(e) => {
          changeHandler(e)
        }}
        value={textHandler}
        name='txt_field'
        id='txt_field'
      ></textarea>
    </div>
  )
}

export default TextArea
