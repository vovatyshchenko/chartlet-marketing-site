import { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: {
      grid: { color: 'rgba(148, 163, 184, 0.1)' },
      ticks: { color: '#94a3b8', font: { size: 11 } },
    },
    y: {
      grid: { color: 'rgba(148, 163, 184, 0.1)' },
      ticks: { color: '#94a3b8', font: { size: 11 } },
    },
  },
};

const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Values',
      data: [12, 19, 8, 14, 11],
      backgroundColor: 'rgba(34, 211, 238, 0.7)',
      borderColor: '#22d3ee',
      borderWidth: 1,
    },
  ],
};

const lineData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Traffic',
      data: [30, 45, 35, 50, 49, 60, 70],
      borderColor: '#22d3ee',
      backgroundColor: 'rgba(34, 211, 238, 0.1)',
      fill: true,
      tension: 0.3,
    },
  ],
};

interface ChartDemoProps {
  variant?: 'bar' | 'line';
}

export default function ChartDemo({ variant = 'bar' }: ChartDemoProps) {
  const options = useMemo(() => chartOptions, []);
  const data = useMemo(() => (variant === 'line' ? lineData : barData), [variant]);

  return (
    <div className="h-full w-full min-h-[240px]">
      {variant === 'line' ? (
        <Line data={data} options={options} />
      ) : (
        <Bar data={data} options={options} />
      )}
    </div>
  );
}
