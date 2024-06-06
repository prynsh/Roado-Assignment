// import React from 'react';
// import { PieChart, Pie, Cell} from 'recharts';

// interface DashboardsCardProps {
//   total: number;
//   upcoming: number;
//   ongoing: number;
//   completed: number;
// }

// const COLORS = ['#FFD700', '#8A2BE2', '#20B2AA'];

// export const DashboardCard = ({ total, upcoming, ongoing, completed }:DashboardsCardProps) => {
//   const data = [
//     { name: 'Upcoming', value: upcoming, color: COLORS[0] },
//     { name: 'Ongoing', value: ongoing, color: COLORS[1] },
//     { name: 'Completed', value: completed, color: COLORS[2] },
//   ];

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold mb-4">Orders</h2>
//       <PieChart width={200} height={200}>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//           labelLine={false}
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} />
//           ))}
//         </Pie>
//         {/* <Tooltip /> */}
//       </PieChart>
//       <div className="text-center mt-2">
//         <p className="text-gray-500">Total</p>
//         <p className="text-xl font-bold">{total}</p>
//       </div>
//       <div className="mt-4">
//         {data.map((entry) => (
//           <div key={entry.name} className="flex justify-between items-center mb-2">
//             <span className="font-medium" style={{ color: entry.color }}>{entry.name}</span>
//             <span>{entry.value}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// components/OrdersCard.tsx

"use client"
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DashboardCardProps {
  title: string;
  total: number;
  upcoming: number;
  ongoing: number;
  completed: number;
}

export const DashboardCard = ({ title, total, upcoming, ongoing, completed }: DashboardCardProps) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const data = [
      { name: 'Upcoming', value: upcoming, color: '#FFD700' },
      { name: 'Ongoing', value: ongoing, color: '#8A2BE2' },
      { name: 'Completed', value: completed, color: '#20B2AA' },
    ];

    const width = 200;
    const height = 200;
    const margin = 20;
    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3
      .select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie<any>().value((d) => d.value);
    const data_ready = pie(data);

    const arc = d3.arc<any>()
      .innerRadius(60)
      .outerRadius(radius);

    svg
      .selectAll('arc')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => d.data.color)
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.7);

    // Clean up function
    return () => {
      d3.select(ref.current).selectAll('*').remove();
    };
  }, [upcoming, ongoing, completed]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-64 mx-2">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="relative flex items-center justify-center" style={{ height: 200 }}>
        <svg ref={ref}></svg>
        <div className="absolute text-center">
          <p className="text-gray-500">Total</p>
          <p className="text-xl font-bold">{total}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium ">Upcoming</span>
          <span>{upcoming}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Ongoing</span>
          <span>{ongoing}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Completed</span>
          <span>{completed}</span>
        </div>
      </div>
    </div>
  );
};




