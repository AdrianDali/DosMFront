import React , {useState, useEffect}from 'react';
import '../styles/Table.css';
import axios from 'axios';

const Tabla = ({ datos }) => {
    const [clientes, setClientes] = useState([]);


    useEffect(() => {
        // Realiza una petición GET a una URL específica
        axios
            .get('http://127.0.0.1:8000/Rennueva/getDatosClient/')
            .then(response => {
                const data = response.data;
                setClientes(data);
              

            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
      <table>
        <thead>
          <tr>
            <th className='etiquetaTabla'>Cliente</th>
            <th className='etiquetaTabla'>Empresa</th>
            <th className='etiquetaTabla'>Email</th>
            <th className='etiquetaTabla'>Telefono</th>
            <th className='etiquetaTabla'>Direccion</th>

          </tr>
        </thead>
        <tbody>
          {clientes.map((fila, index) => (
            console.log("###############################"),
            console.log(clientes),
            console.log(fila),
            
            <tr key={index}>
              <td className='datoTabla'>{fila.nombre + " " + fila.apellido }</td>
              <td className='datoTabla'>{fila.empresa}</td>
              <td className='datoTabla'>{fila.email}</td>
              <td className='datoTabla'>{fila.telefono}</td>
              <td className='datoTabla'>{fila.direccion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

export default Tabla;
