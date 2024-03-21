/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Boton from "../Boton/Boton"
import './Botonera.css'

const Botonera = ({counter, setCounter, tirada, setTirada, setResultado, dados, setDados, setLoader}) => {
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
        setLoader(true)
        
        setTimeout(() =>{
            let results = []
        for (let i = 0; i < tirada.length; i++) {
            results[i] = Math.ceil(Math.random() * tirada[i].value)
        }
        setResultado(results)
        setLoader(null)
        }, 1000)
    }

    const handleResetButton = () => {
        setTirada([{id:1, value: null}]);
        setCounter(2);
        setDados(1);
        setResultado([]);
        const selector = document.getElementById("dado-1");
        selector.value = "dados";
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
                texto="Reset"
                icon={false}
                tamano={32}
                activo={true}
                accion={handleResetButton}
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