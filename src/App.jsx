import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Resultado from './components/Resultado/Resultado'
import Selector from './components/Selector/Selector'
import Botonera from './components/Botonera/Botonera'

function App() {

    return (
        <>
            <Header />
            <main>
                <Resultado/>
                <Selector/>
                <Botonera/>
            </main>
            <Footer />
        </>
    )
}

export default App
