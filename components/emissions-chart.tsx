"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { year: 1950, emissions: 6, tech: 10 },
  { year: 1960, emissions: 9, tech: 15 },
  { year: 1970, emissions: 14, tech: 20 },
  { year: 1980, emissions: 19, tech: 30 },
  { year: 1990, emissions: 22, tech: 45 },
  { year: 2000, emissions: 24, tech: 65 },
  { year: 2010, emissions: 30, tech: 85 },
  { year: 2020, emissions: 34, tech: 95 },
]

export default function EmissionsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="colorTech" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="year" tick={{ fill: "#1F2937" }} />
        <YAxis tick={{ fill: "#1F2937" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Area
          type="monotone"
          dataKey="emissions"
          stroke="#FF6B6B"
          fillOpacity={1}
          fill="url(#colorEmissions)"
          name="CO₂ Emissions"
        />
        <Area
          type="monotone"
          dataKey="tech"
          stroke="#4ECDC4"
          fillOpacity={1}
          fill="url(#colorTech)"
          name="Tech Growth"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
