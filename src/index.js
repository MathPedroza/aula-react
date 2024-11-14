import React from 'react'
import ReactDOM from 'react-dom/client' // função que atualiza o DOM
import "./style.css"

import Pq from "./App.js" // Pq - nome criado para chaamr um componente

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render( // renderizar, qual componente
    <Pq />
)

