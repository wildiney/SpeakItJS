import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout/Layout'
import TextArea from '../components/Textarea/TextArea'
import Button from '../components/Button/Button'

function index() {
  const [language, setLanguage] = useState('pt-BR')
  const [text, setText] = useState('')

  const init = () => {
    if (typeof speechSynthesis === 'undefined') {
      alert('Não é possível ativar o sistema de voz')
    } else {
      speak('')
    }
  }

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const voice = synth.getVoices().filter((voice) => {
      return voice.lang === language
    })[0]
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.voice = voice
    synth.speak(utterance)
  }

  const speakThis = (speakAll = false) => {
    if (text === '') {
      return
    }

    if (speakAll == true) {
      speak(text);
      return;
    }
    if (text.slice(-1) === ' ') {
      let lastWord = text.split(' ').slice(-2)
      speak(lastWord)
    } else {
      let lastChar = text.slice(-1)
      speak(lastChar)
    }
  }

  useEffect(() => {
    init();
    speakThis()
  })

  return (
    <>
      <Head>
        <title>Speak it</title>
      </Head>
      <Layout>
        <TextArea keyupHandler={setText} changeHandler={setText} textHandler={text}></TextArea>
        <Button clickHandler={speakThis}>Leia!</Button>
      </Layout>
    </>
  )
}

export default index
