import React from "react";
import DoughnutChart from "@/components/Dashboard/Chart/DoughnutChart";

interface ChartLegendItem {
    label: string;
    value: string;
    color: string;
}

const chartData: ChartLegendItem[] = [
    { label: "Last 6 days", value: "40%", color: "#5A6ACF" },
    { label: "Previous Period", value: "30%", color: "#8593ED" },
    { label: "Earlier Period", value: "30%", color: "#C7CEFF" },
];

const LegendItem: React.FC<ChartLegendItem> = ({ label, value, color }) => (
    <div>
        <div className="flex gap-2">
            <div
                className="rounded-8"
                style={{ backgroundColor: color, width: "12px", height: "12px" }}
            ></div>
            <span className="text-xs font-normal text-gray-600">{label}</span>
        </div>
        <span className="pt-2 text-xs font-normal text-gray-600">{value}</span>
    </div>
);

const OrderTime: React.FC = () => {
    return (
        <div className="bg-white rounded-16 shadow-xl p-4 w-full flex flex-col gap-5 max-w-[500px]">
            <div className="flex justify-between">
                <div>
                    <h1>Order Time</h1>
                    <span className="font-normal text-xs text-gray-600 pt-2">
                        From 1-6 Dec, 2025
                    </span>
                </div>
                <button className="rounded-8 bg-[#FBFCFE] shadow-md text-sm px-4 hover:border hover:border-gray-300">
                    View Report
                </button>
            </div>

            <div className="flex justify-center">
                <DoughnutChart />
            </div>

            <div className="flex justify-around">
                {chartData.map((item, index) => (
                    <LegendItem
                        key={index}
                        label={item.label}
                        value={item.value}
                        color={item.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default OrderTime;
