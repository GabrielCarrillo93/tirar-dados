/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Boton from "../Boton/Boton"
import './Botonera.css'

const Botonera = ({counter, setCounter, tirada, setTirada, setResultado, dados, setDados}) => {
    const [activo, setActivo] = useState(false)
    
    const activarBoton = () => {
        const faltante = []
        for (let i = 0; i < tirada.length; i++) {
            faltante[i] = tirada[i].value;
        }
        return faltante.includes(null);
    }

    useEffect(() => {
        setActivo(!activarBoton())
    }, [tirada])

    const handleAgregarClick = () =>{
        setCounter(counter+1)
        setTirada([...tirada, {id: counter, value: null}])
        setDados(dados+1)
    }

    const darResultados = () => {
        let results = []
        for (let i = 0; i < tirada.length; i++) {
            results[i] = Math.ceil(Math.random() * tirada[i].value)
            console.log(results[i]);
        }
        setResultado(results)
    }

    return (
        <div className="botonera">
            <Boton 
                texto="Agregar"
                tamano={32}
                activo={true}
                accion={handleAgregarClick}
                />
            <Boton 
                texto="Tirar"
                icon={true}
                tamano={32}
                activo={activo}
                accion={darResultados}
                />
        </div>
    )
}
export default Botonera