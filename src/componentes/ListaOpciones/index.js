import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => {
    // return <option><option/>   
    //})

    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    const ListaSeleccion =   props.equipos.map( (equipo, index) => {
        return <option key={index} value={equipo}>{equipo}</option>
    }) 

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {ListaSeleccion}
        </select>
    </div>
}

export default ListaOpciones