import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'

import classes from './Keyboard.module.css'

function Keyboard ({ addLetter, speakHandler }) {
  const letters = [
    // 'a',
    // 'b',
    // 'c',
    // 'd',
    // 'e',
    // 'f',
    // 'g',
    // 'h',
    // 'i',
    // 'j',
    // 'k',
    // 'l',
    // 'm',
    // 'n',
    // 'o',
    // 'p',
    // 'q',
    // 'r',
    // 's',
    // 't',
    // 'u',
    // 'v',
    // 'w',
    // 'x',
    // 'y',
    // 'z',
    // '˜',
    // '´',
    // ',',
    // '.',
    // '!',
    // '?',
    // '/',
    // ' ',
    // 'apagar',
    // 'enter'
  ]

  return (
    <div className={classes.keyboard}>
      <div className={classes.keys}>
        {/* {letters.map((letter) => {
          return (
            <Button key={letter}
              clickHandler={() => {
                if (letter === 'enter') {
                  addLetter('\r')
                } else {
                  addLetter(letter)
                }
              }}
              newclass={letter}
            >
              {letter === ' ' ? 'ESPAÇO' : letter}
            </Button>
          )
        })} */}
        <Button clickHandler={speakHandler} newclass="btn__fullsize">LEIA!</Button>
      </div>
    </div>
  )
}

Keyboard.propTypes = {
  addLetter: PropTypes.func,
  speakHandler: PropTypes.func
}

export default Keyboard
