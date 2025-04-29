import { Line } from 'react-chartjs-2';

export default function MarketChart({ title, data }) {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [{
      label: title,
      data: data.map(d => d.value),
      fill: false,
      borderColor: 'black',
      tension: 0.1,
    }]
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <Line data={chartData} />
    </div>
  );
}
