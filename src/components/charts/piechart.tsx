import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "High", value: 40 },
  { name: "Medium", value: 28 },
  { name: "Low", value: 18 },
];

const COLORS = ["#1b58a1", "#93c5fd", "#e5e7eb"];

export default function DonughtChart() {
  return (
    <div className="w-full h-54">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={40}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="text-xs grid grid-cols-2 gap-2  ">
        {data.map((item, i) => (
          <div key={i} className=" flex gap-2">
            <span
              className=" w-2 h-2 rounded-full"
              style={{ background: COLORS[i] }}
            />
            {item.name} Priority: {item.value}
          </div>
        ))}
      </div>
    </div>
  );
}
