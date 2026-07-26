import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";

type ChartProps = {
  chart?: {
    labels: string[];
    pemasukan: number[];
    pengeluaran: number[];
    saldo: number[];
  };
};

function Charts({ chart }: ChartProps) {

  if (
    !chart ||
    !chart.labels ||
    !chart.pemasukan ||
    !chart.pengeluaran ||
    !chart.saldo
  ) {
    return null;
  }

  const pemasukanData = chart.labels.map((bulan, index) => ({
    bulan,
    pemasukan: chart.pemasukan[index] ?? 0,
    pengeluaran: chart.pengeluaran[index] ?? 0,
  }));

  const saldoData = chart.labels.map((bulan, index) => ({
    bulan,
    saldo: chart.saldo[index] ?? 0,
  }));

  return (
    <div className="charts-grid">

      <div className="chart-card">
        <h3>Pemasukan vs Pengeluaran</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={pemasukanData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bulan" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pemasukan" fill="#16a34a" radius={6} />
            <Bar dataKey="pengeluaran" fill="#dc2626" radius={6} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3>Perkembangan Saldo</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={saldoData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bulan" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="saldo"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Charts;