
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';

import axios from "axios";



export default function Pies() {
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




    ChartJS.register(ArcElement, Tooltip, Legend);




    var options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    var data = {
        labels: clientes,

        datasets: [
            {
                label: 'Plastico en porcentaje ',

                data: porcentajePlastico,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };



    return <Pie data={data} options={options} />
}