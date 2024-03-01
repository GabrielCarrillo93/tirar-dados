/* eslint-disable react/prop-types */
import Boton from '../Boton/Boton'
import './Selector.css'

// eslint-disable-next-line react/prop-types
const Selector = ({setDados, dados, id, tirada, setTirada}) => {
    const activo = dados > 1
    
    
    const handleButtonClick = () => {
        setDados(dados-1)
        setTirada(
            [...tirada.filter(item => item.id !== id)]
        )
    }
    const handleSelectChange = () => {
        const selector = document.getElementById(`dado-${id}`)
        const dado = tirada.findIndex(d => d.id === id);
        setTirada(tirada.with(dado, {id: id, value: parseInt(selector.value)}))
    }
    return (
        <div className='selector'>
            <span>Seleccione un dado:</span>
            <select name="dado" id={`dado-${id}`} defaultValue={"dados"} onChange={handleSelectChange}>
                <option value="dados" disabled>dados</option>
                <option value="4">D4</option>
                <option value="6">D6</option>
                <option value="8">D8</option>
                <option value="10">D10</option>
                <option value="12">D12</option>
                <option value="20">D20</option>
            </select>
            <Boton 
                texto="Eliminar" 
                tamano={16}
                activo={activo}
                accion={handleButtonClick}/>
        </div>
    )
}
export default Selector