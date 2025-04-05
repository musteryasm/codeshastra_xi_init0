"use client"
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts"

interface BarChartProps {
  data: any[]
}

const COLORS = ["#ef4444", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6"]

export function BarChart({ data }: BarChartProps) {
  // Determine which keys to use for bars based on the first data item
  const firstItem = data[0]
  const barKeys = firstItem
    ? Object.keys(firstItem).filter((key) => key !== "name" && typeof firstItem[key] === "number")
    : ["high", "medium", "low"] // Default fallback

  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsBarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {barKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={COLORS[index % COLORS.length]}
            stackId={barKeys.length > 3 ? undefined : "a"} // Only stack if we have 3 or fewer bars
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

interface LineChartProps {
  data: any[]
}

export function LineChart({ data }: LineChartProps) {
  // Determine which keys to use for lines based on the first data item
  const firstItem = data[0]
  const lineKeys = firstItem
    ? Object.keys(firstItem).filter((key) => key !== "name" && typeof firstItem[key] === "number")
    : ["unauthorized", "tax", "pricing", "suspicious"] // Default fallback

  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsLineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {lineKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={COLORS[index % COLORS.length]}
            activeDot={{ r: index === 0 ? 8 : 6 }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

interface PieChartProps {
  data: any[]
}

export function PieChart({ data }: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPieChart>
    </ResponsiveContainer>
  )
}

