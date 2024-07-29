import img from "../assets/images/main-bg.png";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ItemsData {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  imgSrc: string;
}

type CardItems = ItemsData[];

const items: CardItems = [
  {
    id: 1,
    title: "Bento 3D Kit",
    subtitle: "Illustration",
    color: "bg-pink-100",
    imgSrc: img,
  },
  {
    id: 2,
    title: "Bento 3D Kit",
    subtitle: "Illustration",
    color: "bg-orange-100",
    imgSrc: img,
  },
  {
    id: 3,
    title: "Collab UI Kit",
    subtitle: "Coded Template",
    color: "bg-blue-100",
    imgSrc: img,
  },
];

export { items };

export const data = {
  labels: ["Oct", "Mar", "Jul", "Aug"],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 42.5, 25],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Dataset 2",
      data: [15, 30, 25, 35],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      pointBackgroundColor: "rgba(153, 102, 255, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(153, 102, 255, 1)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          return `${context.raw}`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 60,
    },
  },
};
