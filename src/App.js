import Frase from "./components/Frase.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Botao from "./components/Botao.js";
import Entrada from "./components/Entrada.js";
import { Alert } from "bootstrap";

function App() { //Sempre encapsulr as tags dentro de uma tag principal (Div)

    const textoLabel = "Nome:";

    function volta() {
        return Alert("Voltou")
    }

    let texto = "Texto dinâmico!"

    var nota = 3

    return (
        <div
            className="divApp">
            <Frase frase="Olá, tudo bem?" titulo="Título qualquer" />
            <Entrada textoLabel={textoLabel} />
            <Entrada textoLabel="Senha" >
                <label htmlFor="termos">Aceita os termos</label>
                <input type="checbox" id="termos" />
                <Botao texto="Enviar texto" />
            </Entrada>
            <Frase frase={texto} nota={9} />
            <Frase nota={10} />
            <Frase nota={nota} />
            <Botao texto={"Voltar"} />
        </div>
    )
}

export default App // exportar a função/aplicação como um componente, para utilizar em outras páginas