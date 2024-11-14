import React from 'react'

const Entrada = ({ children, texto }) => {
    const [textpo, botao] = React.children.toArray(children)
    return (
        <>
            {texto}
            <label className="rotulo" htmlFor="nome">{texto}</label>
            <input type="text" id="nome" />
            <p>Digite no campo acima</p>
            {children}
        </>
    )
}

export default Entrada