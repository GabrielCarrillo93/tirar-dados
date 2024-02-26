import Boton from '../Boton/Boton'
import './Selector.css'

const Selector = () => {
    return (
        <div className='selector'>
            <span>Seleccione un dado:</span>
            <select name="dado" id="dado" defaultValue={"dados"}>
                <option value="dados" disabled>dados</option>
                <option value="4">D4</option>
                <option value="6">D6</option>
                <option value="8">D8</option>
                <option value="10">D10</option>
                <option value="12">D12</option>
                <option value="20">D20</option>
            </select>
            <Boton texto="Eliminar" tamano={16}/>
        </div>
    )
}
export default Selector