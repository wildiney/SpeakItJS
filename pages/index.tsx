import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout/Layout'
import TextArea from '../components/Textarea/TextArea'
import Keyboard from '../components/Keyboard/Keyboard'
import Button from '../components/Button/Button'

function index() {
  const [language, setLanguage] = useState('pt-BR')
  const [text, setText] = useState('')
  const [accent, setAccent] = useState('')
  let isDelete = false

  const speak = (text) => {
    const synth = window.speechSynthesis
    const voice = synth.getVoices().filter((voice) => {
      return voice.lang === language
    })[0]
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.voice = voice
    synth.speak(utterance)
  }

  const init = () => {
    if (typeof speechSynthesis === 'undefined') {
      alert('Não é possível ativar o sistema de voz')
    } else {
      speak('')
    }
  }

  const speakThis = (speakAll = false) => {
    if (text === '') {
      return
    }

    if (isDelete === true) {
      isDelete = false
      console.log('Erasing')
      return
    }

    if (speakAll == true) {
      speak(text)
      return
    }

    if (text.slice(-1) === ' ') {
      let lastWord = text.split(' ').slice(-2)
      speak(lastWord)
    } else {
      let lastChar = text.slice(-1)
      speak(lastChar)
    }
  }

  const keyupHandler = (e) => {
    const textToRead = text

    console.log(e.keyCode)
    if (e.keyCode === 8) {
      isDelete = true
    }
    speakThis(text)
  }

  const changeHandler = (e) => {
    const text = (e.target as HTMLTextAreaElement).value.toLowerCase()
    setText(text)
  }

  const addLetter = (letter) => {
    if (accent !== '') {
      let txt = text

      if (accent == '˜') {
        if (letter === 'a') {
          setText(txt.slice(0, -1) + 'ã')
          setAccent('')
        }
        if (letter == 'o') {
          setText(txt.slice(0, -1) + 'õ')
          setAccent('')
        }
      }

      if (accent == '´') {
        if (letter === 'a') {
          setText(txt.slice(0, -1) + 'á')
          setAccent('')
        }
        if (letter === 'e') {
          setText(txt.slice(0, -1) + 'é')
          setAccent('')
        }
        if (letter === 'i') {
          setText(txt.slice(0, -1) + 'í')
          setAccent('')
        }
        if (letter == 'o') {
          setText(txt.slice(0, -1) + 'ó')
          setAccent('')
        }
        if (letter == 'u') {
          setText(txt.slice(0, -1) + 'ú')
          setAccent('')
        }
      }
    } else {
      let txt = text

      if (letter == 'apagar') {
        setText('')
      } else if (letter == '˜') {
        setText(txt + '˜')
        setAccent('˜')
      } else if (letter == '´') {
        setText(txt + '´')
        setAccent('´')
      } else {

        setText(txt + letter)
      }
    }
  }

  useEffect(() => {
    init()
    speakThis(text)
  })

  return (
    <>
      <Head>
        <title>Speak it</title>
      </Head>
      <Layout>
        <TextArea
          keyupHandler={keyupHandler}
          changeHandler={changeHandler}
          textHandler={text}
        ></TextArea>
        <Keyboard addLetter={addLetter} speakHandler={speakThis} ></Keyboard>
        {/* <Button clic  kHandler={speakThis}>Leia!</Button> */}
      </Layout>
    </>
  )
}

export default index
