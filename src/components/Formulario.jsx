import React from "react";

const Formulario = () => {
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [lista, setLista] = React.useState([])
    const guardarDatos = (e) =>{
        e.preventDefault()
// validar si los campos estan vacios
        if(!fruta.trim()){
            return alert ('Campo fruta vacio')
        }
        if(!descripcion.trim()){
            return alert ('Campo descripcion vacio')
        }
//////
        setLista ([... lista,
            {nombreFrta: fruta, nombreDescripcion: descripcion}

        ])
    }
    return(
        <>
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos}>
                <input 
                    type = "text"
                    placeholder ='Ingresar fruta'
                    onChange={(e) =>setFruta(e.target.value)}
                />
                <input 
                    type = "text"
                    placeholder ='Ingrese descripcion'
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <button type = 'submin'>Agregar</button>

            </form>
            <ul>
                {
                    lista.map((item, index) =>(
                        <li key={index}>
                            <h4>{item.nombreFrta} - {item.nombreDescripcion}</h4>
                        </li>
                    ) )
                }
            </ul>

        </>

    )
}
export default Formulario