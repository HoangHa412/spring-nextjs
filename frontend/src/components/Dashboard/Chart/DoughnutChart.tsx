// components/DoughnutChart.js
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    // Dữ liệu cho biểu đồ
    const data = {
        datasets: [
            {
                label: 'My First Dataset',
                data: [300, 50, 100], // Dữ liệu số lượng cho các phần
                backgroundColor: ['#5A6ACF', '#8593ED', '#C7CEFF'], // Màu sắc các phần
                hoverOffset: 6, // Khoảng cách khi hover
            },
        ],
    };

    // Các options của biểu đồ
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            weight: 10,
            borderJoinStyle: 'miter',
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.raw + '%'; // Hiển thị giá trị với ký hiệu %
                    },
                },
            },
        },
    };

    return (
        <div className='h-[250px]'>
            <Doughnut data={data} options={options}/>
        </div>
    );
};

export default DoughnutChart;
