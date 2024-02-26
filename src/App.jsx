import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Resultado from './components/Resultado/Resultado'
import Selector from './components/Selector/Selector'
import Botonera from './components/Botonera/Botonera'

function App() {
    const [dados, setDados] = useState(1)
    const [tirada, setTirada] = useState([{id:1, value: null}])
    const [resultado, setResultado] = useState([])
    
    return (
        <>
            <Header />
            <main>
                <Resultado resultado={resultado}/>
                {tirada.map(dado => <Selector id={dado.id} key={dado} setDados={setDados}/>)}
                <Botonera tirada={tirada} setTirada={setTirada} setResultado={setResultado} dados={dados} setDados={setDados}/>
            </main>
            <Footer />
        </>
    )
}

export default App
