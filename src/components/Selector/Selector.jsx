import './Selector.css'


const Selector = ({id, cantidad}) => {
  return (
    <section className="selector" id={id}>
        <label htmlFor={`dado-${id}`}>Seleccione un dado:</label>
        <select name={`dado-${id}`} id={`dado-${id}`}>
            <option value="null" hidden disabled selected>Seleccione</option>
            <option value="4">d4 </option>
            <option value="6">d6</option>
            <option value="8">d8</option>
            <option value="10">d10 </option>
            <option value="12">d12</option>
            <option value="20">d20</option>
            <option value="100">d100</option>
        </select>
        <div>
            <button>+</button>
            {id < 2 && cantidad >= 2 ? "" : <button>-</button>}
        </div>
    </section>
  )
}

export default Selector