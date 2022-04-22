import React from "react";

const Formulario = () => {
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [cantidad, setCantidad] = React.useState('')
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
        if(!cantidad.trim()){
            return alert ('Campo cantidad vacio')
        }
//////
        setLista ([... lista,
            {nombreFruta: fruta, nombreDescripcion: descripcion, nombreCantidad: cantidad}

        ])
    }
    return(
        <div className='container mt -5'>
            <h1 className='text-center'>Crud basico</h1>

            <hr />
            <div className="row">
                <div className="col-8">
                   <h4 className="text-center"> listado </h4>
                    <ul className="list-group">
                    {
                    lista.map((item, index) =>(
                        <li classname='list-group-item' key={index}>
                            <span className="lead">{item.nombreFruta} - {item.nombreDescripcion} - {item.nombreCantidad}</span> 
                            <button className="btn btn-danger btn-sm float-end mx-2">Eliminar</button>
                            <button className="btn btn-warning btn-sm float-end ">Editar</button>
                        </li>
                    ) )
                }

                    </ul>
                </div>
                <div className="col-4">
                    <h4 className="text-center">Registro</h4>
                    <form onSubmit={guardarDatos}>
                       <input 
                       className="form-control mb-2"
                         type = "text"
                         placeholder ='Ingresar fruta'
                         onChange={(e) =>setFruta(e.target.value)}
                        />
                        <input 
                        className="form-control mb-2"
                         type = "text"
                         placeholder ='Ingrese descripcion'
                         onChange={(e) => setDescripcion(e.target.value)}
                       />
                       <input 
                        className="form-control mb-2"
                         type = "text"
                         placeholder ='Ingrese cantidad'
                         onChange={(e) => setCantidad(e.target.value)}
                       />

                <button className="btn btn-primary" type = 'submin'>Agregar</button>
            </form>
        </div>
    </div>
</div>
    )
}
export default Formulario