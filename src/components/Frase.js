import style from "./Frase.modulo.css"
import protoTypes from "prop-types" // tipo de variáveis

const Frase = ({ frase, titulo = "Carregando título...", nota = (10) }) => { // parâmetro de entrada recebio pelo Props
    return (
        // encapsular dentro de um fragmento de jsx
        <>
            <h1>{titulo}</h1>
            <br />
            <p className={style.estiloFrase}>{Frase}Parágrafo</p>
            <br />
            <p>Nota: {nota}</p>
            <br />
        </>
    )
}

Frase.protoTypes = {
    nota: protoTypes.number.isRequired, // tipo número obrigatório
    titulo: protoTypes.string,
    frase: protoTypes.string,
}

/* Não funciona mais o código abaixo 
Frase.defaultProps = {
    titulo: "Carregando título...", // título padrão enquanto não carrega o principal
}*/

export default Frase