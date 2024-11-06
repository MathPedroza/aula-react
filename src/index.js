import React from 'react'
import ReactDOM from 'react-dom/client' // função que atualiza o DOM

function App() {
    return <p>Olá mundo!</p>
}

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render( // renderizar, qual componente
    <App />
)

