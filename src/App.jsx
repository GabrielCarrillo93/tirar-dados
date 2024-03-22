import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Resultado from './components/Resultado/Resultado'
import Selector from './components/Selector/Selector'
import Botonera from './components/Botonera/Botonera'

function App() {
    const [dados, setDados] = useState(1)
    const [tirada, setTirada] = useState([{id:1, value: null}])
    const [resultado, setResultado] = useState([])
    const [counter, setCounter] = useState(2)
    const [loader, setLoader] = useState(null)

    
    return (
        <>
            <Header />
            <main>
                <Resultado 
                    resultado={resultado}
                    loader={loader}/>
                <div className='seleccion'>
                {tirada.map(dado => <Selector 
                                        key={dado.id} 
                                        id={dado.id} 
                                        setDados={setDados} 
                                        dados={dados} 
                                        tirada={tirada}
                                        setTirada={setTirada}
                                        />)
                    }
                </div>
                <Botonera 
                    counter={counter}
                    setCounter={setCounter}
                    tirada={tirada} 
                    setTirada={setTirada} 
                    setResultado={setResultado} 
                    dados={dados} 
                    setDados={setDados}
                    setLoader={setLoader}/>
            </main>
        </>
    )
}

export default App
