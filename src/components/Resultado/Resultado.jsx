import './Resultado.css'

const Resultado = ({ tirada}) => {
  return (
    <section className='resultadoSection'>
        <h2>Resultados</h2>
        <div className="resultado">
            <span className="tirada">{tirada}</span>
        </div>
    </section>
  )
}

export default Resultado