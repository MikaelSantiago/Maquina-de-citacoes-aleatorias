import Escritor from "./autor"
import ButtonQuote from "./button"
import ShareTwitter from "./compartilhar"
import Frases from "./frase"
import React, { useState } from "react"
import '../style.css'

const frases = {
    "TheodoreRoosevelt" : `"Believe you can and you're halfway there"`,
    "Jesus" : `"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."`,
    "Confucius" : `"Everything has beauty, but not everyone can see."`,
    "Kevin Kruse" : `"We must balance conspicuous consumption with conscious capitalism."`,
    "Arthur Ashe" : `"Start where you are. Use what you have. Do what you can."`,
    "Oprah Winfrey" : `"You become what you believe."`
}

const sorteiaFrases = () => {
    let chaves = Object.keys(frases) // obtem todad as chaves do dicionario e coloca em um array
    let chaveAleatoria = chaves[Math.floor(Math.random() * chaves.length)]
    let fraseEscolhida = frases[chaveAleatoria]
    
    return [chaveAleatoria, fraseEscolhida]
}

const cores = [
    "rgb(22, 160, 133)",
    "rgb(115, 168, 87)",
    "rgb(251, 105, 100)",
    "rgb(39, 174, 96)",
    "rgb(71, 46, 50)",
    "rgb(52, 34, 36)",
    "rgb(243, 156, 18)"
]

let fraseComAutor = sorteiaFrases()

export default function CaixaDeMsg() {
    const [frase, setFrase] = useState(fraseComAutor[1])
    const [autor, setAutor] = useState(fraseComAutor[0])


    const alteraState = () => {
        fraseComAutor = sorteiaFrases()
        setAutor(fraseComAutor[0])
        setFrase(fraseComAutor[1])
    }

    const mudaCor = () => {
        const root = document.getElementById('root')
        const texto = document.getElementById('text')
        const nomeAutor = document.getElementById('author')
        const newQuote = document.getElementById('new-quote')
        const twitter = document.getElementById('tweet-quote')
        //const container = document.getElementsByClassName('container')
        let cor = Math.floor(Math.random() * cores.length)

        document.body.style.backgroundColor = cores [cor]
        root.style.backgroundColor = cores [cor]
        texto.style.color = cores [cor]
        nomeAutor.style.color = cores [cor]
        newQuote.style.backgroundColor = cores[cor]
        twitter.style.backgroundColor = cores[cor]
        //container.style.backgroundColor = 'green'
    }

    const alteraFraseECor = () => {
        alteraState()
        mudaCor()
    }
    
    return (
        <div className="container">
            <div id="quote-box">
                <Frases texto={frase} />
                <Escritor autor={autor} />
                <div className="botoes">
                    <ShareTwitter />
                    <ButtonQuote alteraFraseECor={alteraFraseECor}/>
                </div>
            </div>
        </div>
    )
}