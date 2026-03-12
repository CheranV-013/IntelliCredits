import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Apr", revenue: 24, debt: 10 },
  { month: "May", revenue: 22, debt: 11 },
  { month: "Jun", revenue: 20, debt: 12 },
  { month: "Jul", revenue: 19, debt: 13 },
  { month: "Aug", revenue: 17, debt: 15 },
  { month: "Sep", revenue: 16, debt: 16 }
];

export default function TrendChart() {
  return (
    <div style={{ width: "100%", height: 220 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#0FB98B" strokeWidth={2} />
          <Line type="monotone" dataKey="debt" stroke="#F25F5C" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
