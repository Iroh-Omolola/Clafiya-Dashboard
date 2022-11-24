import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

interface Props {
  data: any;
  min: any;
  max: any;
  stepSize: any;
}
export default function CardLineChart({data, min, max, stepSize }: Props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  const options: any = {
    maintainAspectRatio: false,
    responsive: true,
    tension: 0.5,
    scaleShowLabels: false,
    pointBorderColor: "#ffffff",
    pointBorderWidth: 3,
    borderWidth: 2,
    pointRadius: 5,
    pointHoverRadius: 5,
    plugins: {
      title: {
        display: false,
        text: "Chart",
        fontColor: "white",
      },
      legend: {
        display: false,
        labels: {
          fontColor: "white",
          boxWidth: 1,
          boxHeight: 2,
        },
        align: "end",
        position: "top",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    },
    layout: {
      padding: 1,
    },
    scales: {
      xAxis: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Month",
          fontColor: "grey",
        },
        grid: {
          display: false,
          drawTicks: true,
          drawBorder: false,
          borderWidth: 6,
        },
        markers: {
          size: 7,
        },
      },
      yAxis: {
        display: true,
        min: min,
        max: max,
        ticks: {
          beginAtZero: true,
          // display: true,
          callback: function (value, index, ticks) {
           if(stepSize===20000){
            return "$" + value;
           }
           return value
          },
          // forces step size to be 5 units
          stepSize: stepSize, // <----- This prop sets the stepSize
        },
        grid: {
          borderDash: function (context: any) {
            if (context.index === 0) {
              return [0];
            }
            return [4];
          },
          borderDashOffset: [3],
          drawBorder: false,
          drawBorderDash: [0],
          drawTicks: true,
          tickMarkLength: 2,
          color: function (context: any) {
            return "#ACB0C5";
          },
          zeroLineColor: "rgba(33, 37, 41, 0)",
          zeroLineBorderDash: [4],
          zeroLineBorderDashOffset: [0],
        },
      },
    },
  };

  return (
    <>
      <div className="w-full">
        <div className="p-2">
          <div className="h-[12rem]">
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
