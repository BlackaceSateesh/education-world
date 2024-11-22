import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [chartOptions] = useState({
    chart: {
      type: "bar",
      height: 350,
    },
    title: {
      text: "B.Com Colleges", 
      align: "left", 
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#767677",
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "IIT Bombay",
        "IIT Delhi",
        "IIT Kanpur",
        "IIT Kharagpur",
        "IIT Madras",
        "IIM Ahmedabad",
        "IIM Bangalore",
        "IIM Calcutta",
        "BITS Pilani",
        "NIT Trichy",
      ],
    },
  });

  const [chartSeries] = useState([
    {
      data: [1200, 1150, 1100, 1050, 1000, 950, 900, 850, 800, 750],
    },
  ]);

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      height={350}
    />
  );
};

export default BarChart;
