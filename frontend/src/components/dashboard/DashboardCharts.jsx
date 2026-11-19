import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
}
from "chart.js";

import {
  Doughnut
}
from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function DashboardCharts() {

  const data = {
    labels: [
      "Pendientes",
      "Progreso",
      "Completadas"
    ],
    datasets: [
      {
        data: [12, 8, 25],
        backgroundColor: [
          "#f39c12",
          "#3498db",
          "#2ecc71"
        ]
      }
    ]
  };

  return (
    <div className="chart-container">

      <h3>
        Estado de las tareas
      </h3>

      <Doughnut data={data} />

    </div>
  );
}