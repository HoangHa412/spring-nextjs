import React from "react";
import {Bar, Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    // Dữ liệu cho biểu đồ
    const data = {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        datasets: [
            {

                data: [65, 59, 80, 81, 56, 55, 90, 100, 70, 60, 85, 95],
                borderColor: "#5A6ACF",
                backgroundColor: "rgba(90, 103, 186, 0.5)",
                tension: 0.1, // Độ cong của đường
            },
            {
                data: [30, 75, 85, 75, 40, 50, 65, 55, 45, 70, 80, 60],
                borderColor: "#E6E8EC",
                tension: 0.1, // Độ cong của đường
            },

        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div style={{height: "200px" }}> {/* Kích thước nhỏ hơn */}
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;