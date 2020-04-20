if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function(){
            console.log('Service worker registered')
        })
}


const btn_falar = document.getElementById('btn_speak')
const txt_field = document.getElementById('txt_field')


btn_falar.addEventListener('click',
    (e) => {
        e.preventDefault();
        speakThis(true)
    })
txt_field.addEventListener('keyup', () => { speakThis() })



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
        return voice.lang === 'pt-BR'
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

init();