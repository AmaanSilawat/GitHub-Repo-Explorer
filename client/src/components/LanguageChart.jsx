import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

function LanguageChart({ repos }) {
  const languageCount = {};

  repos.forEach((repo) => {
    if (!repo.language) return;

    languageCount[repo.language] =
      (languageCount[repo.language] || 0) + 1;
  });

  const chartData = Object.entries(languageCount).map(
    ([language, count]) => ({
      name: language,
      value: count,
    })
  );

  if (chartData.length === 0) return null;

  return (
    <div className="chart-container">
      <h2>Languages Used</h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LanguageChart;