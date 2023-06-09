import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


import axios from "axios";
var porcentaje = [];
var porcentajePlastico = [];
// Realiza una petición GET a una URL específica
fetch("http://127.0.0.1:8000/Rennueva/getAllClientesPlastico/")
  .then(response => response.json())
  .then(data => {
    porcentaje = data.clientes;
    porcentajePlastico = data.plastico;
    console.log(porcentaje);
  })
  .catch(error => {
    console.log("ERROR")
    console.error(error);
  });

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    labels: porcentaje,
    datasets: [
        {
            label: 'Plastico en porcentaje ',
            data: [35, 20, 20, 15, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function Pies() {
    return <Pie data={data} options={options} />
}