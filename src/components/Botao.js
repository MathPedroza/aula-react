function enviar() {
    return alert("Enviou")
}

const Botao = ({ texto, funcao = enviar }) => {
    function enviar() {
        return alert("Enviou!")
    }

    return (
        <button className="estiloBotao" onClick={enviar} >{texto}</button>
    )
}

export default Botao