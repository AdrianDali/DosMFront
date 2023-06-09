import React from 'react';
//import ProductList from '../containers/ProductList';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import LinesChart from "./LinesChart";
import BarsChart from "./BarsChart";
import PiesChart from "./PiesChart";

const Home = () => {
	return (
		<div>
            <h1 className="bg-info text-center font-monospace fw-bold lh-base">Plastico de Clientes</h1>
            <div>
                <p className="m-2"><b>Grafica 1: </b>Total de plastico presentado por mes</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"230px"}}>
                   <LinesChart/> 
                </div>
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
