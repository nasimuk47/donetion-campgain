/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { Chart } from "chart.js/auto";

const Statistics = () => {
    const [donatedCards, setDonatedCards] = useState([]);
    const [chartData, setChartData] = useState(null);
    const chartRef = useRef(null);

    useEffect(() => {
        const storedCards =
            JSON.parse(localStorage.getItem("donatedCards")) || [];
        setDonatedCards(storedCards);
    }, []);

    useEffect(() => {
        if (donatedCards.length > 0) {
            const totalCards = 12;
            const donatedPercentage = (donatedCards.length / totalCards) * 100;
            const remainingPercentage = 100 - donatedPercentage;

            const data = {
                labels: ["Donated", "Remaining"],
                datasets: [
                    {
                        data: [donatedPercentage, remainingPercentage],
                        backgroundColor: ["#36A2EB", "#FF6384"],
                        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
                    },
                ],
            };

            setChartData(data);
        }
    }, [donatedCards]);

    useEffect(() => {
        if (chartData) {
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            const ctx = document
                .getElementById("donationChart")
                .getContext("2d");
            const newChart = new Chart(ctx, {
                type: "pie",
                data: chartData,
            });

            chartRef.current = newChart;
        }
    }, [chartData]);

    return (
        <div className="  flex justify-center items-center h-screen">
            <canvas id="donationChart" width="300" height="300"></canvas>
        </div>
    );
};

export default Statistics;
