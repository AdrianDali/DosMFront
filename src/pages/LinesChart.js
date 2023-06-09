import React, { useEffect, useState } from 'react';

import axios from "axios";

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';



export default function LinesChart() {

    const [porcentajePlastico, setPorcentajePlastico] = useState([]); // Valor inicial de porcentajePlastico
    const [clientes, setClientes] = useState([]);


    useEffect(() => {
        // Realiza una petición GET a una URL específica
        axios
            .get('http://127.0.0.1:8000/Rennueva/getAllClientesPlastico/')
            .then(response => {
                const data = response.data;
                const pesos = data.pesos;
                setClientes(data.clientes);
                setPorcentajePlastico(prevPorcentaje => [...prevPorcentaje, ...pesos]);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );
    
    
    
    
    var beneficios = [10, 13, 15, 16, 17, 21, 24, 24, 25, 30, 34, 40];
    var meses = clientes;
    var midata = {
        labels: meses,
        datasets: [ // Cada una de las líneas del gráfico
            {
                label: 'Kilos de plástico reciclado',
                data: beneficios,
                tension: 0.5,
                fill : true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)',
            },
            {
                label: 'Estimacion de kilos de plástico reciclado',
                data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
            },
        ],
    };
    
    var misoptions = {
        scales : {
            y : {
                min : 0
            },
            x: {
                ticks: { color: 'rgb(255, 99, 132)'}
            }
        }
    };


    return <Line data={midata} options={misoptions}/>
}