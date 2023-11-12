import { Icon } from "@iconify/react";
import './Tirador.css'

// eslint-disable-next-line react/prop-types
const Tirador = ({ onClick }) => {
    
    return (
        <section className="tiradorSection">
            <button onClick={() =>{onClick}} className="tirador">
                Tirar <Icon icon="arcticons:roll20" className="icono"/>
            </button>
        </section>
    )
}

export default Tirador