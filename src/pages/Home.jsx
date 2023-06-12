import React, {useState} from 'react';
//import ProductList from '../containers/ProductList';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import LinesChart from "./LinesChart";
import BarsChart from "./BarsChart";
import PiesChart from "./PiesChart";
import Tabla from "../components/Table";
import CUDButtons from '../containers/CUDButtons';

const Home = () => {
    const [datos, setDatos] = useState([
        { dato1: 'Dato 1', dato2: 'Dato 2', dato3: 'Dato 3', dato4: 'Dato 4', dato5: 'Dato s' },
        { dato1: 'Dato 4', dato2: 'Dato 5', dato3: 'Dato 6', dato4: 'Dato 3', dato5: 'Dato 3' }
      ]);
    
      const agregarFila = () => {
        const nuevaFila = { dato1: 'Nuevo Dato 1', dato2: 'Nuevo Dato 2', dato3: 'Nuevo Dato 3' };
        setDatos([...datos, nuevaFila]);
      }
	return (
		<div>
            <h1 className="bg-info text-center font-monospace fw-bold lh-base">Plastico de Clientes</h1>
            <div >
                <h2 className="bg-light text-center font-monospace fw-bold lh-base">CLIENTES</h2>
                <Tabla datos={datos} />
                <CUDButtons handleAdd={agregarFila} />
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b>Grafica 2: </b>Plastico por cliente</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"225px"}}>
                   <BarsChart/>
                </div>
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b>Grafica 3: </b>Plastico por cliente</p>
                <div className="bg-light mx-auto border border-2 border-primary" style={{width:"450px", height:"250px"}}>
                    <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
						<PiesChart/>             
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Home;
