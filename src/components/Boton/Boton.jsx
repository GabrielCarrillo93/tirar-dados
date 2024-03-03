import { Icon } from '@iconify/react'
import './Boton.css'

// eslint-disable-next-line react/prop-types
const Boton = ({texto, tamano, icon, activo, accion}) => {


    return (
        <button
            onClick={accion}
            disabled={activo ? false : true}
            type="button"
            style={{fontSize: `${tamano}px`}}>{texto}{icon? <Icon icon="arcticons:rpg-simple-dice"/> : ""}</button>
            
    )
}
export default Boton