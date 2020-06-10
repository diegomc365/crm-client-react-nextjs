import Layout from '../components/Layout'
import Producto from '../components/Producto'
import {gql, useQuery} from '@apollo/client'

const OBTENER_PRODUCTOS = gql`
    query obtenerProductos {
        obtenerProductos {
            id
            nombre
            precio
            existencia
            creado
        }
    }
`;

const Productos = () => {

    // consultar los productos
    const { data, loading, error } = useQuery(OBTENER_PRODUCTOS)

    // console.log(data)
    // console.log(loading)
    // console.log(error)

    if(loading) return 'Cargando...'

    return (
        <div>
            <Layout>
                <h1 className="text-2xl text-gray-800 font-light">Productos</h1>
                <table className="table-auto shadow-md mt-10 w-full w-lg">
                    <thead className="bg-gray-800">
                        <tr className="text-white" >
                            <th className="w-1/5 py-2">Nombre</th>
                            <th className="w-1/5 py-2">Existencia</th>
                            <th className="w-1/5 py-2">Precio</th>
                            <th className="w-1/5 py-2">Eliminar</th>
                            <th className="w-1/5 py-2">Editar</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white">
                        {data.obtenerProductos.map( producto => (
                            <Producto 
                            key={producto.id}
                            producto={producto}
                            />
                        ))}
                    </tbody>
                </table>
            </Layout>
        </div>
    )
}

export default Productos;