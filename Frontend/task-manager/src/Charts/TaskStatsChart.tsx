import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);




interface Props {
  completed: number;
  pending: number;
  inProgrees: number;
  total: number;
}

const DoughnutChart = ({ completed, pending, inProgrees, total }: Props) => {
  const data = {
    labels: ["Completed", "Pending", "InProgress"],
    datasets: [
      {
        data: [completed, pending, inProgrees],
        backgroundColor: [
        "#4CAF50",   // Completed
        "#e09440",   // In Progress
        "#F2C94C"    // Pending
      ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '85%',
    plugins: {
      legend: {
        display: false, // Hide labels if you want a clean look
      },
    },
  };

  // Plugin to display total count in the center of the doughnut chart
const centerTextPlugin = {
  id: "centerText",
  afterDraw(chart:any) {
    const { ctx, chartArea: { width, height } } = chart;

    ctx.save();
    ctx.font = "bold 22px Arial";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 50px Inter";
    ctx.fillText(`${total}`, width / 2, height / 2 - 10);

    ctx.font = "20px Arial";        // Smaller font
  ctx.fillStyle = "#333";
  ctx.fillText("Tasks", width / 2, height / 2 + 30);
    ctx.restore();
  }
};

  return (
    <div className="w-30 h-30 md:w-40 md:h-40 ">
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default DoughnutChart;
