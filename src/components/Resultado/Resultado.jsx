/* eslint-disable react/prop-types */
import './Resultado.css'

const Resultado = ({resultado}) => {
    const getTotal = (t) => {
        let suma = 0
        for (let el = 0; el < t.length; el++) {
            suma+= t[el]
        }
        return suma
    }

    const sumaTotal = getTotal(resultado)

    return (
        <section className='resultadoSection'>
            <h2>Resultados</h2>
            <div className="resultado">
                <p className='total'>Total: <span className='tirada'>{sumaTotal ? sumaTotal : "--"}</span></p>
                <p className='lista'>Dados: {resultado.map((item, i) => <span key={i}>{item} </span>)}</p>
            </div>
        </section>
    )
}

export default Resultado 