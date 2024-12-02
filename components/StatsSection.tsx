"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    { title: "Jobs Posted", value: 31091 },
    { title: "Jobs Filled", value: 15153 },
    { title: "Employers", value: 19879 },
    { title: "Active Users", value: 1294180 },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Job Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition">
            <CardHeader>
              <CardTitle className="text-center text-lg font-medium text-blue-700">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-extrabold text-center text-black-500">
                <CountUp start={0} end={stat.value} duration={2.5} separator="," />
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
