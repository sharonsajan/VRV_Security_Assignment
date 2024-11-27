"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data representing role updates, permission grants, and user activity over the week
const data = [
  {
    name: "Sun",
    roleAssignments: 5,
    permissionUpdates: 3,
  },
  {
    name: "Mon",
    roleAssignments: 8,
    permissionUpdates: 4,
  },
  {
    name: "Tue",
    roleAssignments: 4,
    permissionUpdates: 2,
  },
  {
    name: "Wed",
    roleAssignments: 6,
    permissionUpdates: 5,
  },
  {
    name: "Thu",
    roleAssignments: 7,
    permissionUpdates: 3,
  },
  {
    name: "Fri",
    roleAssignments: 5,
    permissionUpdates: 6,
  },
  {
    name: "Sat",
    roleAssignments: 9,
    permissionUpdates: 7,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Activity Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="roleAssignments"
            stroke="#8884d8"
            strokeDasharray="5 5"
            name="Role Assignments"
          />
          <Line
            type="monotone"
            dataKey="permissionUpdates"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
            name="Permission Updates"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
