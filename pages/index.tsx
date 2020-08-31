import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout/Layout'
import TextArea from '../components/Textarea/TextArea'
import Button from '../components/Button/Button'

function index() {
  const [language, setLanguage] = useState('pt-BR')

  const init = () => {
    if (!'speechSynthesis' in window) {
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
    let txt = txt_field.value.toLowerCase()
    console.log(txt)
    if (txt === '') {
      return
    }

    if (speakAll == true) {
      speak(txt);
      return;
    }
    if (txt.slice(-1) === ' ') {
      let lastWord = txt.split(' ').slice(-2)
      speak(lastWord)
    } else {
      let lastChar = txt.slice(-1)
      speak(lastChar)
    }
  }

  useEffect(() => {
    init();
  })

  return (
    <>
      <Head>
        <title>Speak it</title>
      </Head>
      <Layout>
        <TextArea keyupHandler={speakThis}></TextArea>
        <Button clickHandler={speakThis}>Leia!</Button>
      </Layout>
    </>
  )
}

export default index
