import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Resultado from './components/Resultado/Resultado'
import Tirador from './components/Tirador/Tirador'
import Selector from './components/Selector/Selector'

function App() {

    const initialState = [
        {
            id: 1,
            value: null
        }
    ]

    const [cantidadDeDados, setCantidadDeDados] = useState(2);
    const [selectores, setSelectores] = useState(initialState);

    
    return (
        <>
            <Header />
            <main>
                <Resultado />
                {
                selectores.map((el) => <Selector key={el.id} id={`${el.id}`} value={el.value} cantidad={cantidadDeDados}/>
                )
                }
                <Tirador/>
            </main>
            <Footer />
        </>
    )
}

export default App
