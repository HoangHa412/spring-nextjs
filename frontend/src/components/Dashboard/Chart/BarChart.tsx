import React from "react";
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";


// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    // Data for the chart
    const data = {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        datasets: [
            {
                label: "Dataset 1",
                data: [65, 59, 80, 81, 56, 55, 90, 100, 70, 60, 85, 95], // Monthly data
                backgroundColor: "#5A6ACF",
            },
            {
                label: "Dataset 2",
                data: [30, 75, 85, 75, 40, 50, 65, 55, 45, 70, 80, 60], // Monthly data
                backgroundColor: "#E6E8EC",
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
        maintainAspectRatio: false,
        barThickness: 11,
        scales: {
            x: {
                grid: {
                    drawBorder: false,
                    lineWidth: 0
                }
            }
        }
    };

    return (
        <div className='h-[300px]'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
