"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "1990",
    USA: 5,
    China: 2.5,
    Germany: 1.2,
    Japan: 1.1,
  },
  {
    name: "2000",
    USA: 5.8,
    China: 3.4,
    Germany: 1.0,
    Japan: 1.2,
  },
  {
    name: "2010",
    USA: 5.5,
    China: 7.2,
    Germany: 0.9,
    Japan: 1.3,
  },
  {
    name: "2020",
    USA: 5.0,
    China: 10.5,
    Germany: 0.8,
    Japan: 1.1,
  },
]

export default function CountryComparisonChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUSA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0.6} />
          </linearGradient>
          <linearGradient id="colorChina" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.6} />
          </linearGradient>
          <linearGradient id="colorGermany" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2E3A59" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#2E3A59" stopOpacity={0.6} />
          </linearGradient>
          <linearGradient id="colorJapan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#A1C4FD" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#A1C4FD" stopOpacity={0.6} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="name" tick={{ fill: "#1F2937" }} />
        <YAxis tick={{ fill: "#1F2937" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Legend />
        <Bar dataKey="USA" fill="url(#colorUSA)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="China" fill="url(#colorChina)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Germany" fill="url(#colorGermany)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Japan" fill="url(#colorJapan)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
